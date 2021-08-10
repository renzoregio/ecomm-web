const path = require("path");
const merge = require("deepmerge");
const fs = require("fs");

const ALLOWED_FW = ["shopify", "bigcommerce", "shopify_local"];
const FALLBACK_FW = "shopify";
function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error(
      "The API framework is missing, please add a valid provider!"
    );
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The API framework: ${framework} cannot be found! Please use one of the allowed frameworks: ${ALLOWED_FW.join(
        ", "
      )}`
    );
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FW;
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));

  const config = merge(defaultConfig, frameworkNextConfig);

  const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsConfigPath);

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(tsConfigPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = {
  withFrameworkConfig,
};

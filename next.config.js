const { withFrameworkConfig } = require("./framework/common/config");
module.exports = withFrameworkConfig({
  framework: {
    name: process.env.NEXT_PUBLIC_FRAMEWORK
  },
  reactStrictMode: true,
});

console.log(JSON.stringify(module.exports, null, 2));

import { Product } from "@common/types/product";

export interface Choices {
  [T in AvailableChoices]: string;
}

export const getVariant = (product: Product, choices: Choices) =>
  product.variants.find((variant) => {
    return variant.options.every((option) => {
      const optionName = option.displayName.toLowerCase();
      return (
        optionName in choices && choices[optionName] === option.values[0].label
      );
    });
  });

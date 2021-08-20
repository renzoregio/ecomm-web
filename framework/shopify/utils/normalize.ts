import { ImageEdge, MoneyV2, Product as ShopifyProduct, ProductOption, ProductVariantConnection, SelectedOption } from "../schema";
import { Product } from "@common/types/product";
const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) => {
  return edges.map(({ node: { originalSrc, ...rest } }) => {
    return {
      url: `/images/${originalSrc}`,
      ...rest,
    };
  });
};

const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => {
  return {
    value: +amount,
    currencyCode
  }
}

const normalizeProductOption = ({
  id,
  name: displayName,
  values
}: ProductOption) => {

  const normalized = {
    id,
    displayName,
    values: values.map(value => {
      let output: any = { label: value }
      if(displayName.match(/colou?r/gi)){
        output = {
          ...output,
          hexColor: value
        }
      }
      return output
    })
  }
  
  return normalized
}


const normalizeProductVariants = ({edges}: ProductVariantConnection) => {
  return edges.map(({node}) => {
    const {id, selectedOptions, sku, title, priceV2, compareAtPriceV2} = node
    return {
      id, 
      name: title,
      sku: sku || id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requireShipping: true,
      options: selectedOptions.map(({name, value}: SelectedOption) => {
        const option = normalizeProductOption({
          id, 
          name,
          values: [value]
        })

        return option
      })
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    priceRange,
    options,
    variants,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(ImageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    options: options ? options.filter(option => option.name !== "Title").map(option => normalizeProductOption(option)) : [],
    variants: variants ? normalizeProductVariants(variants) :[],
    ...rest,
  };

  return product;
}

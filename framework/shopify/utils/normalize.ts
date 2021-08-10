import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";
const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) => {
  return edges.map(({ node: { originalSrc, ...rest } }) => {
    return {
      url: `/images/${originalSrc}`,
      ...rest,
    };
  });
};

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: ImageConnection,
    ...rest
  } = productNode;

  const product: Product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeProductImages(ImageConnection),
    ...rest,
  };

  return product;
}

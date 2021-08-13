

export interface ProductImage {
  url: string;
  altText?: string;
}

export interface ProductPrice {
  value: number,
  currencyCode: "USD" | "EUR" | string
}

export interface Product {
  id: string;
  name: string;
  vendor: string;
  description: string;
  path: string;
  slug: string;
  images: ProductImage[];
  price: ProductPrice;
}

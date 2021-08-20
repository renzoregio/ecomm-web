

export interface ProductImage {
  url: string;
  altText?: string;
}

export interface ProductPrice {
  value: number,
  currencyCode: "USD" | "EUR" | string
}

export interface ProductOptionValues {
  label: string;
  hexColor?: string; 
}

export interface ProductOption {
  id: string;
  displayName: string;
  values: ProductOptionValues[]
}

export interface ProductVariant {
  id: string;
  name: string;
  options: ProductOption[];
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
  options: ProductOption[]
  variants: ProductVariant[]

}

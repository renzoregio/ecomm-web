import type { InferGetStaticPropsType } from "next";
import getAllProducts from "@framework/products/get-all-products";
import { getConfig } from "@framework/api/config";

export async function getStaticProps() {
  const config = getConfig();

  const products = await getAllProducts(config);
  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      Product 1: {products[0].name}
      Product 2: {JSON.stringify(products[1])}
    </>
  );
}

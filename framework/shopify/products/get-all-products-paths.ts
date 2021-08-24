import { ApiConfig } from "@common/types/api";
import { Product } from "@common/types/product";
import { ProductConnection } from "@framework/schema";
import getAllProductsPathsQuery from "@framework/utils/queries/get-all-products-paths";

type returnType = {
    products: Pick<Product, "slug">[];
  };

const getAllProductsPaths = async(config: ApiConfig): Promise<returnType> => {
    const {data} = await config.fetch<{products: ProductConnection}>({query: getAllProductsPathsQuery})
    const products = data.products.edges.map(({node: {handle}}) => {
        return {
            slug: handle
        }
    })
    return { products }

}



export default getAllProductsPaths;
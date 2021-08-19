import { Layout } from "@components/common"
import { getConfig } from "@framework/api/config"
import {getAllProductsPaths, getProduct} from "@framework/products"
import { GetStaticPaths, GetStaticPropsContext, InferGetServerSidePropsType } from "next"

// fetch all of the product slugs
export const getStaticPaths: GetStaticPaths = async() => {
    const config = getConfig()
    const {products} = await getAllProductsPaths(config)

    return {
        paths: products.map((product) => ({params: {slug: product.slug}})),
        fallback: false
    }
}

// provide product specific data to the page
export const getStaticProps = async({params}: GetStaticPropsContext<{slug: string}>) => {
    
    const config = getConfig()
    const { product } = await getProduct({config, variables: {slug: params?.slug}})

    
    return {
        props: {
            product
        }
    }
}

export default function ProductSlug({ product }: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <> {product.id} 
        {product.name}
        {product.description}
        {product.price.currencyCode} {product.price.value}
        </>
    )
}


ProductSlug.Layout = Layout
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
        <>
        <div>ID: {product.id}</div>
        <div>Name: {product.name}</div>
        <div>Price:{product.price.currencyCode} {product.price.value}</div>
        <div>Vendor: {product.vendor}</div>
        <div>Description: {product.description}</div>

        <h1 className="mt-10">Options</h1>
        <div>
            {product?.options.map(option => (
                <>
                <div>
                    Name: {option.displayName}
                </div>
                {option.values.map(value => (
                    <>
                        <div>Label: {value.label}</div>
                        <div>Hex Color: {value?.hexColor}</div>
                    </>
                ))}
                </>
                
            ))}
        </div>

        <h1 className="mt-10">Variants</h1>
        <div>
            {product.variants.map(variant => (
                <div className='mt-10'>
                    <div>Variant Name: {variant.name}</div>
                    {variant.options.map(vo => (
                        <div>
                            Name: {vo.displayName}
                            {vo.values.map(value => (
                                <>
                                    <div>Label: {value.label}</div>
                                    <div>Hex Color: {value.hexColor}</div>
                                </>

                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </>
    )
}


ProductSlug.Layout = Layout
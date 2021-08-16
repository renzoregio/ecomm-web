import { Product } from "@common/types/product";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import s from "./ProductCard.module.css"

interface Props {
  product: Product;
  variant?: "simple" | "slim"
}

const placeholderImage = "/product-image-placeholder.svg";

const ProductCard: FC<Props> = ({ product, variant="simple" }) => {

  const productPrice = `${product.price.currencyCode} ${product.price.value}`

  return (
    <Link href={`/products/${product.slug}`}>
      <a className={s.root}>
        {variant === "slim" ?  (
        
        <>
          <div className="flex inset-0 justify-center items-center absolute z-20" >
            <span className="bg-black text-white font-bold p-3 text-xl">{product.name}</span>
          </div>
          {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? "Product Image"}
                src={product.images[0].url ?? placeholderImage}
                height={320}
                width={320}
                quality="85"
                layout="fixed"
              />
          )}  
        </>
        
        
        ) : (
          <>
            <div className={s.productBg}></div>
            <div className={s.productTag}>
              <h3 className={s.productTitle}>
                <span>{product.name}</span>
              </h3>
              <span className={s.productPrice}>{productPrice}</span>
            </div>
            {product.images && (
              <Image
                className={s.productImage}
                alt={product.name ?? "Product Image"}
                src={product.images[0].url ?? placeholderImage}
                height={540}
                width={540}
                quality="85"
                layout="responsive"
              />
            )}
          </>
        )}
        
      </a>
    </Link>
  );
};

export default ProductCard;

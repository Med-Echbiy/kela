import { CartProdutcPreview, Product } from "@/types";
import React from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import clsx from "clsx";

function CartProduct({
  product,
  addToCart,
  removeProduct,
  reduceProduct,
}: {
  product: CartProdutcPreview;
  reduceProduct: (product: CartProdutcPreview) => void;
  addToCart: (product: CartProdutcPreview) => void;
  removeProduct: (product: CartProdutcPreview) => void;
}) {
  return (
    <div className='xs:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50'>
      <div className='xs:w-4/12 2xl:w-1/4 border border-gray-200 border-solid overflow-hidden rounded-md items-stretch'>
        <Link
          href={`/products/${product._id}`}
          className=' xs:w-full xs:h-full relative xs:block'
        >
          <img
            src={`${urlForImage(product.product_images[0])}`}
            alt='product image'
            className=' xs:absolute xs:inset-0 xs:object-cover block w-full h-full'
          />
        </Link>
      </div>
      <div className='xs:pl-3 xs:w-8/12 2xl:w-3/4 flex flex-col justify-center'>
        <div className='flex items-center justify-between w-full pt-1'>
          <p className='text-base font-black leading-none text-gray-800 dark:text-white'>
            {" "}
            {product.product_name}{" "}
          </p>
        </div>

        <div className='flex flex-col gap-y-4 pt-4'>
          <p
            className={`text-base text-gray-600 ${clsx({
              hidden: product.onSale && product.onSale.is_sale,
            })}`}
          >
            {" "}
            {product.price}${" "}
          </p>
          {product.onSale && (
            <div
              className={` items-center gap-3  ${clsx({
                flex: product.onSale.is_sale,
                hidden: !product.onSale.is_sale,
              })}`}
            >
              <p className='text-red-600 text-base '>
                {product.onSale.salePrice < 1
                  ? "Free"
                  : product.onSale.salePrice}
                $
              </p>
              <p className=' line-through text-muted-foreground text-xs'>
                {product.price}$
              </p>
            </div>
          )}
          <div className='flex items-center gap-5'>
            <div className=' border border-solid rounded-md max-w-fit p-2 '>
              <div className='flex items-center gap-4 text-sm'>
                <Minus
                  size={12}
                  className=' cursor-pointer'
                  onClick={() => reduceProduct(product)}
                />
                <span> {product.quantity} </span>
                <Plus
                  size={12}
                  className=' cursor-pointer'
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                />
              </div>
            </div>
            <Button
              onClick={() => removeProduct(product)}
              className='text-xs'
              size={"sm"}
              variant={"destructive"}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;

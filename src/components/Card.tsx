import React from "react";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import ToolTip from "./ToolTip";
import { Product_Image } from "@/types";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import clsx from "clsx";
import { Product as ProductComplete } from "@/types";

interface Product {
  images: Product_Image[];
  product_name: string;
  price: number;
  id: string;
  onSale: {
    is_sale: boolean;
    salePrice: number;
  };
  otherProps: ProductComplete;
}

function Card({
  images,
  product_name,
  price,
  id,
  onSale,
  otherProps,
}: Product) {
  return (
    <div>
      {/*  */}
      <section className='relative border border-solid border-gray-200 rounded-md group'>
        <div className='flex flex-col items-center justify-center relative aspect-[3/3.7] group cursor-pointer'>
          <div className=' relative w-full h-[100%]'>
            {images && images.length > 0 && (
              <Image
                src={`${urlForImage(images[0])}`}
                alt='Product Image'
                fill
                className={`${
                  images.length > 1 ? "group-hover:opacity-0" : ""
                } transition-all duration-300 ease-linear object-cover object-center`}
              />
            )}
            {images && images.length > 1 && (
              <Image
                src={`${urlForImage(images[1])}`}
                alt='Product Image'
                fill
                objectFit='cover'
                className='group-hover:opacity-100 opacity-0 transition-all duration-300 ease-linear delay-200'
              />
            )}
          </div>
        </div>
        <div className=' absolute flex flex-col gap-4 p-2 py-3 rounded-full bg-gray-50 right-3 top-5'>
          <ToolTip id={id} product={otherProps} />
        </div>
      </section>
      {/* </Link> */}
      <div className='mt-2'>
        <Link href={`/products/${id}`}>
          <p className='mb-1 text-sm text-ellipsis w-full overflow-hidden text-nowrap'>
            {product_name}
          </p>
        </Link>

        <p
          className={`text-sm text-gray-600 ${clsx({
            hidden: onSale && onSale.is_sale,
          })}`}
        >
          {" "}
          {price}${" "}
        </p>
        {onSale && (
          <div
            className={` items-center gap-3 ${clsx({
              flex: onSale.is_sale,
              hidden: !onSale.is_sale,
            })}`}
          >
            <p className='text-red-600 text-sm '>
              {onSale.salePrice < 1 ? "Free" : onSale.salePrice}$
            </p>
            <p className=' line-through text-muted-foreground text-xs'>
              {price}$
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;

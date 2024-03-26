import { cn } from "@/lib/utils";
import React from "react";
import Counter from "./Counter";
import { Button } from "../ui/button";
import clsx from "clsx";
import AddToCart from "./AddToCart";
import products from "../../../sanity/products";
import { Product } from "@/types";

interface ProductProps {
  description: string;
  title: string;
  price: number;
  availability: {
    quantity: number;
    inStock: boolean;
  };
  onSale: {
    is_sale: boolean;
    salePrice: number;
  };
  category: string;
  restOfProduct: Product;
}

function ProductInfo({
  description,
  title,
  price,
  availability,
  onSale,
  category,
  restOfProduct,
}: ProductProps) {
  return (
    <div className='max-w-full md:max-w-lg lg:max-w-full '>
      <h2 className={cn("text-3xl lg:text-4xl xl:text-5xl ", "lineHeight")}>
        {title}
      </h2>
      <p className=' text-muted-foreground text-sm mt-6'>{description}</p>
      <p
        className={`text-2xl mt-6 text-gray-600 ${clsx({
          hidden: onSale && onSale.is_sale,
        })}`}
      >
        {" "}
        {price}${" "}
      </p>
      {onSale && (
        <div
          className={` items-center gap-3 mt-6 ${clsx({
            flex: onSale.is_sale,
            hidden: !onSale.is_sale,
          })}`}
        >
          <p className='text-red-600 text-2xl '>
            {onSale.salePrice < 1 ? "Free" : onSale.salePrice}$
          </p>
          <p className=' line-through text-muted-foreground text-xs'>
            {price}$
          </p>
        </div>
      )}
      <div className='max-w-[300px] mt-6'>
        <img src='/trust.avif' alt='trust' />
      </div>

      <div className='flex gap-6 items-center mt-6'>
        <Counter product={restOfProduct} />
      </div>
      <div className='flex flex-col gap-y-3 mt-6'>
        <p className=' text-sm flex items-center gap-3'>
          {" "}
          <span>
            <span className=' text-muted-foreground text-xs'>
              Availability :{" "}
            </span>{" "}
            {availability.inStock ? "Yes" : "No"}
          </span>{" "}
          <span>/</span>
          <span className='text-xs text-muted-foreground ml-1'>
            left:{" "}
            <span className='text-black'>
              {availability.inStock && (availability.quantity ?? 0)}
            </span>
          </span>
        </p>

        <p className='text-sm flex gap-3 items-center'>
          {" "}
          <span className='text-xs text-muted-foreground'>Category: </span>{" "}
          <span className=' capitalize'>{category.replace("_", " ")}</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;

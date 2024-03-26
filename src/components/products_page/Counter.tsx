"use client";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import { Product } from "@/types";

function Counter({ product }: { product: Product }) {
  const [itemsCounter, setItemsCounter] = useState(1);
  return (
    <>
      <div className=' border border-solid rounded-md max-w-fit p-2 '>
        <div className='flex items-center gap-6'>
          <Minus
            className=' cursor-pointer'
            onClick={() => setItemsCounter((pre) => (pre == 1 ? pre : pre - 1))}
          />
          <span> {itemsCounter} </span>
          <Plus
            className=' cursor-pointer'
            onClick={() => setItemsCounter((pre) => pre + 1)}
          />
        </div>
      </div>
      <AddToCart product={product} quantity={itemsCounter} />
    </>
  );
}

export default Counter;

"use client";
import { useCartStore } from "@/hooks/useCart";
import { Product } from "@/types";
import React from "react";
import CartProduct from "./CartProduct";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import products from "../../../sanity/products";
import { Button } from "../ui/button";
import EmptyCart from "./EmptyCart";
import { SheetClose } from "../ui/sheet";

function CartContent() {
  const {
    cart,
    clearAll,
    totalItems,
    totalPrice,
    reduceItem,
    addToCart,
    removeFromCart,
  } = useCartStore();
  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <div className='grid grid-cols-1 gapy-6 mt-12 cursor-grab'>
      <Carousel
        opts={{
          align: "start",
        }}
        orientation='vertical'
        className='w-full max-w-sm mx-auto'
      >
        <CarouselContent className='-mt-1 max-h-[80vh]'>
          {cart.map((p, i) => (
            <CarouselItem
              key={p._id + p.product_name + p.quantity}
              className='pt-1 basis-1/2'
            >
              <div className='p-1'>
                <CartProduct
                  product={p}
                  addToCart={addToCart}
                  reduceProduct={reduceItem}
                  removeProduct={removeFromCart}
                />
              </div>
            </CarouselItem>
          ))}
          <CarouselItem>
            <div className='flex flex-col gap-y-3'>
              <p className=' text-muted-foreground text-xs flex gap-2 items-center'>
                Total Products:{" "}
                <span className='text-black font-semibold text-sm'>
                  {" "}
                  {totalItems}{" "}
                </span>
              </p>
              <p className=' text-muted-foreground text-xs flex gap-2 items-center'>
                Total Price:{" "}
                <span className='text-black font-semibold text-sm'>
                  {" "}
                  {totalPrice}${" "}
                </span>
              </p>
              <Button className='bg-blue-500'>Check Out</Button>
              <SheetClose>
                {" "}
                <Button
                  variant={"ghost"}
                  className=' mb-6 w-full'
                  onClick={() => clearAll()}
                >
                  Clear All
                </Button>
              </SheetClose>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious variant={"default"} />
        <CarouselNext variant={"default"} />
      </Carousel>
    </div>
  );
}

export default CartContent;

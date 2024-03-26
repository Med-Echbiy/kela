import { Product } from "@/types";
import React from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

function YouMayLike({ products }: { products: Product[] }) {
  console.log(products);
  return (
    <Carousel className='w-full max-w-6xl mx-auto'>
      <CarouselContent className='-ml-1'>
        {products.map((p, index) => (
          <CarouselItem
            key={p._id + p.product_name + index}
            className='pl-1 basis-1/2 lg:basis-1/3 xl:basis-1/4'
          >
            <div className='p-2'>
              <Card
                images={p.product_images}
                id={p._id}
                onSale={p.onSale}
                price={p.price}
                product_name={p.product_name}
                otherProps={p}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default YouMayLike;

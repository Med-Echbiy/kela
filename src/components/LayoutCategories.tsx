import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function LayoutCategories() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto gap-y-4 md:gap-y-0 md:gap-4'>
      <div className=' col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=' relative aspect-square flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/1.webp'
            alt='Messangers'
            fill
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Button variant={"default"}>Messangers</Button>
        </div>
        <div className=' relative aspect-square flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/2.webp'
            alt='Travel and Luggage'
            fill
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Button variant={"default"}>Travel & Luggage</Button>
        </div>
        <div className=' relative aspect-video col-span-full flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/3.webp'
            alt='Laptop Bags'
            fill
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Button variant={"default"}>Laptop Bags</Button>
        </div>
      </div>
      <div className=' col-span-full md:col-span-2 aspect-square md:aspect-auto '>
        <div className=' relative h-full w-full flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/4.webp'
            alt='Backpack'
            fill
            objectFit='cover'
            objectPosition='center'
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Button variant={"default"}>Backpack</Button>
        </div>
      </div>
    </div>
  );
}

export default LayoutCategories;

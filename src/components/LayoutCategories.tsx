import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function LayoutCategories() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto gap-y-4 md:gap-y-0 md:gap-4'>
      <div className=' col-span-3 grid grid-cols-1 xs:grid-cols-2 gap-4'>
        <div className=' relative aspect-square flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/1.webp'
            alt='Messangers'
            fill
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Link href='/categories/messangers'>
            <Button variant={"default"}>Messangers</Button>
          </Link>
        </div>
        <div className=' relative aspect-square flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/2.webp'
            alt='Travel and Luggage'
            fill
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Link href='/categories/travel_luggage'>
            <Button variant={"default"}>Travel & Luggage</Button>
          </Link>
        </div>
        <div className=' relative aspect-video col-span-full flex items-end justify-center py-4 group overflow-hidden cursor-pointer'>
          <Image
            src='/3.webp'
            alt='Laptop Bags'
            fill
            className='-z-10 group-hover:scale-110 transition-all ease-linear'
          />
          <Link href='/categories/laptop_bags'>
            <Button variant={"default"}>Laptop Bags</Button>
          </Link>
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
          <Link href='/categories/backpacks'>
            <Button variant={"default"}>Backpack</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LayoutCategories;

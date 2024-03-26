import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowDownNarrowWideIcon } from "lucide-react";

function Hero() {
  return (
    <>
      <section className='hero flex items-center justify-center relative aspect-square lg:aspect-video xl:aspect-[16/7] mt-3'>
        <Image
          src='/Hero-Image.webp'
          alt='girl carying a bag'
          fill
          className='object-cover object-center -z-10 brightness-75'
          quality={100}
        />
        <div className='hero-text text-white flex flex-col  gap-6'>
          <div className=' capitalize  text-3xl xs:text-4xl  sm:text-5xl lg:text-6xl text-gray-300 text-left flex flex-col gap-4 lg:gap-6 '>
            <p>
              {" "}
              Where <span className=' font-bold text-white'>style</span>
            </p>
            <p>
              Meets <span className=' font-bold text-white'>Functionality</span>
            </p>
          </div>

          <Button
            className='flex items-center gap-3 max-w-fit'
            variant={"secondary"}
          >
            <ArrowDownNarrowWideIcon />
            Explore
          </Button>
        </div>
      </section>
      <div className='border-b border-solid border-gray-200 mt-3'></div>
    </>
  );
}

export default Hero;

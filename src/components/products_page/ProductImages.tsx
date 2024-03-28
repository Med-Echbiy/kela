// @ts-nocheck
"use client";
import { urlForImage } from "../../../sanity/lib/image";
import { Product_Image } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Magnifier from "./Magnifier";
function ProductImages({ image }: { image: Product_Image[] }) {
  const [activeImage, setActiveImage] = useState(0);
  console.log(image[activeImage]);
  return (
    <div className='flex flex-col-reverse gap-3 sm:flex-row min-w-[85%] md:min-w-[420px]'>
      {image.length > 1 && (
        <div className='max-w-[80px] sm:max-w-[120px] lg:max-w-[80px] mt-2 flex sm:flex-col gap-6 flex-row'>
          {image.length > 1 &&
            image.map((img, i) =>
              i === activeImage ? (
                <></>
              ) : (
                <img
                  key={i + "-key_image"}
                  src={`${urlForImage(img)}`}
                  className='object-contain cursor-pointer'
                  onClick={() => setActiveImage(i)}
                />
              )
            )}
        </div>
      )}
      <div
        className={cn(
          "flex-grow relative max-w-sm",
          image.length <= 1 && "mx-auto"
        )}
      >
        <Magnifier src={image[activeImage]} />
      </div>
    </div>
  );
}

export default ProductImages;

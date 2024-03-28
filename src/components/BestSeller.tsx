import Image from "next/image";
import React from "react";
import Card from "./Card";
import { Product } from "@/types";
import { client } from "../../sanity/lib/client";

async function BestSeller() {
  const products: Product[] = await client.fetch(
    "*[_type == 'products'][0...4]",
    {},
    {
      next: { revalidate: 3600 },
    }
  );
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto gap-4'>
      <div className='grid xs:grid-cols-2 md:col-span-3 grid-cols-1 gap-4 items-center justify-center'>
        {products.slice(0, 4).map((e) => (
          <Card
            otherProps={e}
            product_name={e.product_name}
            images={e.product_images}
            key={e._id + "yy"}
            price={e.price}
            id={e._id}
            onSale={e.onSale}
          />
        ))}
      </div>
      <div className=' relative group overflow-hidden md:col-span-2 aspect-square md:aspect-auto'>
        <Image
          fill
          src='/banner.webp'
          alt='banner'
          objectFit='cover'
          objectPosition='center'
          className=' group-hover:scale-125  transition-all ease-linear'
        />
      </div>
    </div>
  );
}

export default BestSeller;

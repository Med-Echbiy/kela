import React from "react";
import { client } from "../../../sanity/lib/client";
import { Product } from "@/types";
import Card from "../Card";
import Link from "next/link";

async function EmptySearch({ searchString }: { searchString: string }) {
  const products: Product[] = await client.fetch(
    "*[_type == 'products' && onSale.is_sale == false ][0...4]",
    {},
    {
      next: { revalidate: 3000 },
    }
  );
  return (
    <div className='grid gap-6 items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <p className='text-muted-foreground col-span-full capitalize text-xs mt-24 mb-3'>
        You are searching: <span className='text-red-600'>{searchString}</span>{" "}
        but no results were found.
        <Link className='text-blue-600' href='/'>
          {" "}
          Return to Home{" "}
        </Link>{" "}
        or explore our
        <Link className='text-blue-600' href='/products'>
          {" "}
          Products Page{" "}
        </Link>
        .
      </p>

      {products.map((p, i) => (
        <Card
          key={p._id + i + "pro"}
          id={p._id}
          images={p.product_images}
          onSale={p.onSale}
          price={p.price}
          product_name={p.product_name}
        />
      ))}
    </div>
  );
}

export default EmptySearch;

import React from "react";
import { getProduct, youMayLike } from "../../../../sanity/lib/client";
import ProductImages from "@/components/products_page/ProductImages";
import ProductInfo from "@/components/products_page/ProductInfo";
import SectionTitle from "@/components/SectionTitle";
import YouMayLike from "@/components/YouMayLik";
import { demoData } from "@/app/page";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Reviews from "@/components/Reviews";

interface PageProps {
  params: { id: string };
}

async function page({ params }: PageProps) {
  const product = await getProduct(params.id);
  const mayLike = await youMayLike(product.categories, product._id);

  return (
    <section className=' w-full max-w-7xl mx-auto p-2 '>
      <div className='my-4 bg-muted py-6'></div>
      <div className='w-full flex flex-col lg:flex-row gap-12 min-h-96 my-12'>
        <ProductImages image={product.product_images} />
        <ProductInfo
          title={product.product_name}
          description={product.description}
          price={product.price}
          availability={product.availability}
          onSale={product.onSale}
          category={product.categories}
          restOfProduct={product}
        />
      </div>
      <SectionTitle subtitle='' title='Reviews' />
      <div className='mb-12 lg:mb-24'>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation='vertical'
          className='w-full max-w-sm mx-auto'
        >
          <CarouselContent className='-mt-1 max-h-[300px]'>
            {demoData.map((e, i) => (
              <CarouselItem
                key={i + "reviewsssss"}
                className='pt-1 md:basis-1/2'
              >
                <div className='p-1'>
                  <Reviews
                    name={e.name}
                    profileImg={e.img}
                    review=''
                    stars={5}
                    workingAt={e.workingAt}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <SectionTitle title='You may also like' subtitle=' ' />
      <YouMayLike products={mayLike} />
    </section>
  );
}

export default page;

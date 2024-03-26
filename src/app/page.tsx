import BestSeller from "@/components/BestSeller";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LayoutCategories from "@/components/LayoutCategories";
import Nav from "@/components/Nav";
import OurPartners from "@/components/OurPartners";
import Reviews from "@/components/Reviews";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import { client } from "../../sanity/lib/client";
import { Product } from "@/types";
import Link from "next/link";

export const demoData = [
  {
    name: "Chester Torres",
    workingAt: "Letters Inc",
    postion: "CEO",
    img: "https://images.unsplash.com/photo-1536164261511-3a17e671d380?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Annie Quinn",
    workingAt: "April Inc",
    postion: "Co-Founder",
    img: "https://images.unsplash.com/photo-1474447976065-67d23accb1e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Arthur Hansen",
    workingAt: "Local Inc",
    postion: "VP of Product",
    img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
  },
];
export default async function Home() {
  const products: Product[] = await client.fetch(
    "*[_type == 'products'][1...9]",
    {},
    {
      next: { revalidate: 3000 },
    }
  );
  return (
    <>
      <Hero />
      <SectionTitle
        title='POWERPLATE COLLECTION'
        subtitle='DISCOVER OUR BEST PRODUCTS'
      />
      <section className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-6 justify-center max-w-6xl mx-auto'>
        {products.map((e) => (
          <Card
            product_name={e.product_name}
            images={e.product_images}
            key={e.product_name + e._id}
            price={e.price}
            id={e._id}
            onSale={e.onSale}
            otherProps={e}
          />
        ))}
        <Link
          href='/products'
          className='flex items-center justify-center mt-4 mb-12 col-span-full'
        >
          <Button variant={"outline"} className='flex items-center gap-2'>
            Load More <ChevronsDown size={14} />
          </Button>
        </Link>
      </section>
      <LayoutCategories />
      <SectionTitle
        title='BEST SELLER PRODUCTS'
        subtitle='BEST SELLING PRODUCTS THIS SEASON'
      />
      <BestSeller />
      <SectionTitle title='OUR PARTNERS' subtitle='WHO WE WORK WITH' />
      <OurPartners />
      <SectionTitle
        title='HAPPY Customers'
        subtitle='WHat Folks are saying about us'
      />
      <div className='max-w-6xl mx-auto grid grid-cols-1 gap-y-12 lg:grid-cols-3'>
        {demoData.map((e) => (
          <Reviews
            key={e.name}
            profileImg={e.img}
            review={""}
            stars={5}
            name={e.name}
            postion={e.postion}
            workingAt={e.workingAt}
          />
        ))}
      </div>
    </>
  );
}

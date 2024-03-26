import Filter from "@/components/products_page/Filter";

import Card from "@/components/Card";
import DropDownMenu from "@/components/products_page/DropDownMenu";
import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  getCategoryProductsItemsLength,
  getCtaegoryProducts,
} from "../../../../sanity/lib/client";
import EmptyCategory from "@/components/categories/EmptyCategory";

type OrderBy =
  | "featured"
  | "bestSelling"
  | "a-z"
  | "z-a"
  | "lowToHigh"
  | "highToLow"
  | "newToOld"
  | "oldToNew";
interface PageProps {
  searchParams: {
    page: number;
    orderBy: OrderBy;
  };
  params: {
    category: string;
  };
}

async function page({ searchParams, params }: PageProps) {
  console.log(searchParams, params);
  const totalItems = await getCategoryProductsItemsLength(params.category);
  if (totalItems === 0) {
    return <EmptyCategory category={params.category} />;
  }
  const itemsPerPage = 8;
  const pages = Math.ceil(totalItems / itemsPerPage);
  const currentPage =
    Number(searchParams.page ?? 1) <= pages
      ? Number(searchParams.page ?? 1)
      : 1;
  const products = await getCtaegoryProducts(
    currentPage,
    {
      start: 0,
      end: itemsPerPage,
    },
    searchParams.orderBy,
    params.category
  );

  return (
    <>
      <div className="w-full relative h-52 mt-2 bg-[url('/bg.webp')] bg-cover bg-center text-white flex items-center justify-center">
        <div
          aria-disabled='true'
          className=' absolute inset-0 w-full h-full bg-gray-800 opacity-50'
        />
        <h1 className='z-20 font-semibold text-xl'>
          Explore {params.category.replace("_", " ")} Category
        </h1>
      </div>
      <section className='max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12'>
        <div className='my-4 col-span-full flex items-center justify-between gap-6 w-full'>
          {/* <Filter /> */}
          <div aria-disabled='true'></div>
          <div className='max-w-[280px]'>
            <DropDownMenu
              searchParams={searchParams}
              currentPage={currentPage}
            />
          </div>
        </div>
        <p className='col-span-full text-xs text-muted-foreground capitalize'>
          {" "}
          total products : {totalItems}{" "}
        </p>
        {products.map((product) => (
          <Card
            images={product.product_images}
            key={product._id + "product_Products"}
            product_name={product.product_name}
            id={product._id}
            price={product.price}
            onSale={product.onSale}
            otherProps={product}
          />
        ))}
        <div className='border-t border-solid border-gray-200 pt-12 mt-12 col-span-full'>
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href={`/products?page=${currentPage - 1}&orderBy=${
                      searchParams.orderBy ?? "featured"
                    }`}
                  />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationLink
                  isActive
                  href={`/products?page=${currentPage}&orderBy=${
                    searchParams.orderBy ?? "featured"
                  }`}
                >
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              {currentPage + 1 <= pages && (
                <PaginationItem>
                  <PaginationLink
                    href={`/products?page=${currentPage + 1}&orderBy=${
                      searchParams.orderBy ?? "featured"
                    }`}
                  >
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              {currentPage + 1 <= pages && (
                <PaginationItem>
                  <PaginationNext
                    href={`/products?page=${currentPage + 1}&orderBy=${
                      searchParams.orderBy ?? "featured"
                    }`}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </>
  );
}

export default page;

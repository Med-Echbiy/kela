import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
type OrderBy =
  | "featured"
  | "bestSelling"
  | "a-z"
  | "z-a"
  | "lowToHigh"
  | "highToLow"
  | "newToOld"
  | "oldToNew";
interface DropDownProps {
  searchParams: {
    page: number;
    orderBy: OrderBy;
  };
  currentPage: number;
}
function DropDownMenu({ searchParams, currentPage }: DropDownProps) {
  function setPage(param: OrderBy) {
    return searchParams.orderBy === param ? currentPage : 1;
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='min-w-[150px]'>
          <Button variant='outline'>Order By</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("featured")}&orderBy=featured`}
          >
            <DropdownMenuItem>Featured</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Best Selling</DropdownMenuItem>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("a-z")}&orderBy=a-z`}
          >
            <DropdownMenuItem>Alphabetically, A-Z</DropdownMenuItem>
          </Link>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("z-a")}&orderBy=z-a`}
          >
            <DropdownMenuItem>Alphabetically, Z-A</DropdownMenuItem>
          </Link>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("lowToHigh")}&orderBy=lowToHigh`}
          >
            <DropdownMenuItem>Price, low to high</DropdownMenuItem>
          </Link>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("highToLow")}&orderBy=highToLow`}
          >
            <DropdownMenuItem>Price, high to low</DropdownMenuItem>
          </Link>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("newToOld")}&orderBy=newToOld`}
          >
            <DropdownMenuItem>Date, new to old</DropdownMenuItem>
          </Link>
          <Link
            className=' cursor-pointer'
            href={`/products?page=${setPage("lowToHigh")}&orderBy=lowToHigh`}
          >
            <DropdownMenuItem>Date, old to new</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default DropDownMenu;

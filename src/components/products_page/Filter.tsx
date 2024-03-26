import React from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "../ui/sheet";
type OrderBy =
  | "featured"
  | "bestSelling"
  | "a-z"
  | "z-a"
  | "lowToHigh"
  | "highToLow"
  | "newToOld"
  | "oldToNew";
interface FilterProps {
  searchParams: {
    page: number;
    orderBy: OrderBy;
  };
  currentPage: number;
}
function Filter({ searchParams, currentPage }: FilterProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>Filter</Button>
      </SheetTrigger>
      <SheetContent className='xs:px-2' side='left'>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className='grid gap-4 py-6'></div>
        {/* <SheetFooter>
          
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}

export default Filter;

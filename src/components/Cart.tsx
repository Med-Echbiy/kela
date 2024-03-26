import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ShoppingBag } from "lucide-react";
import CartContent from "./cart/CartContent";

function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBag />
      </SheetTrigger>
      <SheetContent className=' xs:min-w-[320px] sm:min-w-[390px] md:min-w-[400px]'>
        <CartContent />
      </SheetContent>
    </Sheet>
  );
}

export default Cart;

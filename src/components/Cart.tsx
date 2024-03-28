"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { ShoppingBag } from "lucide-react";
import CartContent from "./cart/CartContent";
import { useCartStore } from "@/hooks/useCart";

function Cart() {
  const { totalItems } = useCartStore();
  const [hydration, setHydration] = useState(false);
  useEffect(() => {
    if (window !== undefined) {
      setHydration(true);
    }
  }, []);
  return (
    <Sheet>
      <SheetTrigger>
        <div className=' relative'>
          <ShoppingBag />
          {hydration && (
            <div className='w-4 h-4 absolute text-xs -inset-1 rounded-full bg-gray-100 shadow-sm text-red-700'>
              {totalItems}
            </div>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className=' w-full xs:min-w-[320px] sm:min-w-[390px] md:min-w-[400px]'>
        <CartContent />
      </SheetContent>
    </Sheet>
  );
}

export default Cart;

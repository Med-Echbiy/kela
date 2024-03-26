"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search, ShoppingBag } from "lucide-react";
import { Navigation } from "./Navigation";
import { SideNav } from "./SideNav";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import Cart from "./Cart";
import Link from "next/link";

function Nav() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  }
  return (
    <div className='sticky h-16 w-full inset-0 z-50'>
      <nav className='w-full h-full flex bg-white items-center border-b border-solid border-gray-200 gap-7'>
        <Link href='/'>
          <div className='logo min-w-20'>
            <img src='/Logo.webp' alt='logo image with name Kalles' />
          </div>
        </Link>
        <Navigation />
        <div className='block lg:hidden'>
          <SideNav />
        </div>
        <div className='notifications flex items-center gap-3 flex-grow justify-end'>
          <Popover>
            <PopoverTrigger>
              <Search />
            </PopoverTrigger>
            <PopoverContent className='bg-transparent border-none shadow-md'>
              <div className='realtive w-full'>
                <form onSubmit={(e) => onSubmit(e)}>
                  <Input
                    placeholder='search product...'
                    name='search'
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    type='submit'
                    className='absolute top-1/2 right-5 z-10 -translate-y-1/2'
                  >
                    <Search className='  cursor-pointer' />
                  </button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
          <div className='notfication-cart-icon'>
            <Cart />
          </div>

          <Button className='notification-signUp-btn hidden  md:block'>
            Sing-Up
          </Button>
          <Button
            variant={"outline"}
            className='notification-signUp-btn hidden md:block'
          >
            Sing-In
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

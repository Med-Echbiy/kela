"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { ArrowDown, ArrowUp } from "lucide-react";

export function Navigation({ mobile }: { mobile?: boolean }) {
  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <NavigationMenu
      className={cn(
        "hidden lg:flex md:ml-2 lg:ml-4 xl:ml-12",
        mobile && "flex"
      )}
    >
      <NavigationMenuList
        className={cn(mobile && "flex-col items-start justify-start")}
      >
        <NavigationMenuItem>
          {!mobile && (
            <>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                  <ListItem href='/categories/messangers' title='Messangers'>
                    Explore our Messenger Backpacks for stylish and practical
                    ways to stay connected on the go!
                  </ListItem>
                  <ListItem
                    href='/categories/travel_luggage'
                    title='Travel & Luggage'
                  >
                    Travel smart with our stylish luggage essentials.
                  </ListItem>
                  <ListItem href='/categories/laptop_bags' title='Laptop Bags'>
                    Elevate your tech game with our sleek and protective laptop
                    bags.
                  </ListItem>
                  <ListItem href='/categories/backpacks' title='Backpacks'>
                    Elevate your tech game with our sleek and protective laptop
                    bags.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </>
          )}
          {mobile && (
            <Collapsible>
              <CollapsibleTrigger onClick={() => setCollapsed((pre) => !pre)}>
                <p className='flex items-center gap-4 px-4 my-2'>
                  <span>Categories</span>
                  {!collapsed ? <ArrowDown size={14} /> : <ArrowUp size={14} />}
                </p>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className='grid py-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] border-b border-solid border-gray-200 mb-2 text-sm'>
                  <ListItem href='/categories/messangers' title='Messangers' />

                  <ListItem
                    href='/categories/travel_luggage'
                    title='Travel & Luggage'
                  />

                  <ListItem
                    href='/categories/laptop_bags'
                    title='Laptop Bags'
                  />

                  <ListItem href='/categories/backpacks' title='Backpacks' />
                </ul>
              </CollapsibleContent>
            </Collapsible>
          )}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle())}
            href='/products'
          >
            Our Products
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={cn(navigationMenuTriggerStyle(), "text-red-600")}
            href='/onSale'
          >
            SALE
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href='/contact_us'
          >
            Contact Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href='/about_us'
            className={navigationMenuTriggerStyle()}
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

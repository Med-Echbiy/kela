import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Navigation } from "./Navigation";

export function SideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=' cursor-pointer' />
      </SheetTrigger>
      <SheetContent className='xs:px-2' side='left'>
        <SheetHeader>
          <SheetTitle>
            <img
              src='/Logo.webp'
              alt='logo image with name Kalles'
              className='mx-auto'
            />
          </SheetTitle>
        </SheetHeader>
        <div className='grid gap-4 py-6'>
          <Navigation mobile={true} />
        </div>
        <SheetFooter>
          <div className=' flex gap-3 flex-col w-full'>
            <Button className='notification-signUp-btn'>Sing-Up</Button>
            <Button variant={"outline"} className='notification-signUp-btn'>
              Sing-In
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

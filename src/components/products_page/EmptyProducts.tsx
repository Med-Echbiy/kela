import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function EmptyProducts() {
  return (
    <div className='flex items-center justify-center text-center h-screen capitalize flex-col gap-y-8'>
      <p className=' capitalize'>
        We have No Products Listed for the at moment please comeback later
      </p>
      <p className='flex items-center gap-3 justify-center '>
        <Link href={`/`}>
          <Button className='flex items-center gap-3 justify-center'>
            <ArrowLeft /> Go Back to Home
          </Button>
        </Link>
      </p>
    </div>
  );
}

export default EmptyProducts;

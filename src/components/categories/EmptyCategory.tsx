import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

function EmptyCategory({ category }: { category: string }) {
  return (
    <div className='flex items-center justify-center text-center h-screen capitalize flex-col gap-y-8'>
      <p className=' capitalize'>
        {" "}
        this category{" "}
        <span className='text-blue-600'>
          {" "}
          {category.replace("_", " ")}{" "}
        </span>{" "}
        Has no Products{" "}
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

export default EmptyCategory;

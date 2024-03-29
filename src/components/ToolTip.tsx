"use client";
import { Eye, LucideIcon, ShoppingCart } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Product } from "@/types";
import { useCartStore } from "@/hooks/useCart";
import Link from "next/link";

interface TooltipProps {
  id: string;
  IconclassName?: string;
  contentClassName?: string;
  product?: Product;
}

function ToolTip({
  id,
  IconclassName,
  contentClassName,
  product,
}: TooltipProps) {
  const { addToCart } = useCartStore();
  return (
    <>
      <Link href={`/products/${id}`}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Eye size={14} />
            </TooltipTrigger>
            <TooltipContent>
              <p className={cn(contentClassName)}> Quick View </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <ShoppingCart
              size={14}
              className={cn("", IconclassName)}
              onClick={() => product && addToCart({ ...product, quantity: 1 })}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p className={cn("", contentClassName)}> Add To Cart </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default ToolTip;

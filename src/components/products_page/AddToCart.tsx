"use client";
import React from "react";
import { Button } from "../ui/button";
import { useCartStore } from "@/hooks/useCart";
import { Product } from "@/types";

function AddToCart({
  quantity,
  product,
}: {
  quantity: number;
  product: Product;
}) {
  const { addToCart } = useCartStore();
  return (
    <Button onClick={() => addToCart({ quantity, ...product })}>
      Add To Cart
    </Button>
  );
}

export default AddToCart;

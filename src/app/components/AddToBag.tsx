"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlfor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: object;  // ✅ Changed from 'any' to 'object'
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlfor(image).url(),
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product);  // ✅ Fixed the error
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}

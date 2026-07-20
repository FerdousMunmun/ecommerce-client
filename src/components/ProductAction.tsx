"use client";

import { useState } from "react";
import { addToCart } from "@/service/cart";
import { toast } from "sonner";

interface ProductActionsProps {
  product: any;
}

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    await addToCart({
      ...product,
      quantity,
    });

    
  toast.success("Product added to cart!");
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border"
        >
          -
        </button>

        <span className="text-xl font-semibold">{quantity}</span>

        <button
          onClick={() => setQuantity(quantity + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border"
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-6 rounded-lg bg-black px-8 py-3 text-white"
      >
        Add {quantity} To Cart
      </button>
    </div>
  );
}
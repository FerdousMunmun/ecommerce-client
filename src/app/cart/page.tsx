"use client";

import { useEffect, useState } from "react";
import { getCartProducts } from "@/service/cartService";
import { deleteCartProduct } from "@/service/cartService";
import { toast } from "sonner";
import { updateCartQuantity } from "@/service/cartService";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function CartPage() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
  const fetchCart = async () => {
    const data = await getCartProducts();
    setCartItems(data);
  };

  fetchCart();
}, []);
const handleQuantity = async (
  id: string,
  quantity: number
) => {
  if (quantity < 1) return;

  const result = await updateCartQuantity(id, quantity);

  if (result.modifiedCount > 0) {
    setCartItems((prev: any) =>
      prev.map((item: any) =>
        item._id === id
          ? { ...item, quantity }
          : item
      )
    );
  }
};

const handleRemove = async (id: string) => {
  console.log("Removing ID:", id);

  const result = await deleteCartProduct(id);

  console.log("Delete Result:", result);

  if (result.deletedCount > 0) {
    setCartItems((prev: any) =>
      prev.filter((item: any) => item._id !== id)
    );

    toast.success("Removed from cart");
  } else {
    toast.error("Delete failed");
  }
};
return (
  <div className="mx-auto max-w-7xl p-10">
    <h1 className="mb-8 text-4xl font-bold">
      Shopping Cart
    </h1>

    {cartItems.map((item: any) => (
    <div
  key={item._id}
  className="mb-5 flex items-center justify-between rounded-xl border p-5 shadow-sm"
>

     <div className="flex items-center gap-5">
  <img
    src={item.image}
    alt={item.name}
    className="h-28 w-28 rounded-lg object-cover"
  />

  <div>
    <h2 className="text-xl font-semibold">
      {item.name}
    </h2>

    <p className="mt-2 text-lg font-bold">
      ${item.price}
    </p>
    <div className="mt-4 flex items-center gap-3">
  <button
    onClick={() =>
      handleQuantity(
        item._id,
        (item.quantity || 1) - 1
      )
    }
    className="h-9 w-9 rounded-lg border"
  >
    -
  </button>

  <span className="text-lg font-semibold">
    {item.quantity || 1}
  </span>

  <button
    onClick={() =>
      handleQuantity(
        item._id,
        (item.quantity || 1) + 1
      )
    }
    className="h-9 w-9 rounded-lg border"
  >
    +
  </button>
</div>
  </div>
 <button
  onClick={() => handleRemove(item._id)}
  className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
>
  Remove
</button>
</div>
      </div>
    ))}
    <div className="mt-10 rounded-xl border p-6 shadow-sm">
  <h2 className="mb-4 text-2xl font-bold">
    Order Summary
  </h2>

  <div className="mb-3 flex justify-between">
    <span>Total Items</span>
    <span>{cartItems.length}</span>
  </div>

  <div className="mb-3 flex justify-between">
    <span>Total Price</span>
    <span>
      $
      {cartItems.reduce(
        (total: number, item: any) =>
          total +
          item.price * (item.quantity || 1),
        0
      )}
    </span>
  </div>
<Button
  variant="outline"
  className="w-full mb-3"
>
  Continue Shopping
</Button>

<Link href="/checkout">
  <Button className="w-full bg-black text-white">
    Proceed to Checkout
  </Button>
</Link>
</div>

   
  </div>
);
}
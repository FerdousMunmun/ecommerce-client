"use client";

import { useEffect, useState } from "react";
import { getCartProducts } from "@/service/cartService";
import { Button, Input } from "@heroui/react";
import { placeOrder } from "@/service/orderService";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const loadCart = async () => {
      const data = await getCartProducts();
      setCartItems(data);
    };

    loadCart();
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const handlePlaceOrder = async () => {
  if (cartItems.length === 0) {
    return;
  }

  const order = {
    items: cartItems,
    total,
    createdAt: new Date(),
    status: "Pending",
  };

  const result = await placeOrder(order);

  if (result.insertedId) {
    router.push("/order-success");
  }
};

  return (
    <div className="mx-auto grid max-w-7xl gap-10 p-10 md:grid-cols-2">
      <div>
        <h1 className="mb-6 text-3xl font-bold">
          Checkout
        </h1>

       <div className="space-y-4">
  <div>
    <label className="mb-2 block font-medium">Full Name</label>
    <Input placeholder="Enter your full name" />
  </div>

  <div>
    <label className="mb-2 block font-medium">Email</label>
    <Input type="email" placeholder="Enter your email" />
  </div>

  <div>
    <label className="mb-2 block font-medium">Phone</label>
    <Input placeholder="Enter your phone" />
  </div>

  <div>
    <label className="mb-2 block font-medium">Address</label>
    <Input placeholder="Enter your address" />
  </div>

  <div>
    <label className="mb-2 block font-medium">City</label>
    <Input placeholder="Enter your city" />
  </div>
</div>
      </div>

      <div className="rounded-xl border p-6 shadow">
        <h2 className="mb-5 text-2xl font-bold">
          Order Summary
        </h2>

        {cartItems.map((item: any) => (
          <div
            key={item._id}
            className="mb-3 flex justify-between"
          >
            <span>
              {item.name} × {item.quantity || 1}
            </span>

            <span>
              $
              {item.price * (item.quantity || 1)}
            </span>
          </div>
        ))}

        <hr className="my-5" />

        <div className="mt-6 border-t pt-5">
  <div className="flex justify-between text-2xl font-bold">
    <span>Total</span>
    <span>${total}</span>
  </div>
</div>

       <Button
  onPress={handlePlaceOrder}
  className="w-full bg-black text-white"
>
  Place Order
</Button>
      </div>
    </div>
  );
}
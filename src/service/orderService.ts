import { authClient } from "@/lib/auth-client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const placeOrder = async (order: any) => {
      
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    throw new Error("Failed to place order");
  }

  return res.json();
};
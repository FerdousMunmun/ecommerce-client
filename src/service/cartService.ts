const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCartProducts = async () => {
  const res = await fetch(`${API_URL}/cart`);

  if (!res.ok) {
    throw new Error("Failed to fetch cart");
  }

  return res.json();
};


export const deleteCartProduct = async (id: string) => {
  const res = await fetch(`${API_URL}/cart/${id}`, {
    method: "DELETE",
  });

  return res.json();
};

export const updateCartQuantity = async (
  id: string,
  quantity: number
) => {
  const res = await fetch(`${API_URL}/cart/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  });

  return res.json();
};
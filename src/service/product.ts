const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
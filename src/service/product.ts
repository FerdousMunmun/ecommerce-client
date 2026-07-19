const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getNewArrivals = async () => {
  const res = await fetch(
    `${API_URL}/products?sort=newest&limit=8`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
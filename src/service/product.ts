const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (
  page = 1,
  limit = 6,
  search = "",
  sort = "newest",
    category = ""
) => {
  const res = await fetch(
    `${API_URL}/products?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}&sort=${sort}&category=${encodeURIComponent(category)}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};


export const getProductById = async (id: string) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};
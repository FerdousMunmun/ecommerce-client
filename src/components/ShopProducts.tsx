"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { getProducts } from "@/service/product";
import ProductCard from "./ProductCard";


import "swiper/css";
import "swiper/css/navigation";
import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ShopProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
const [total, setTotal] = useState(0);
const limit = 6;
const [search, setSearch] = useState("");
const [sort, setSort] = useState("newest");

  useEffect(() => {
    const fetchProducts = async () => {
  try {
    const data = await getProducts(page, limit, search,sort);

    setProducts(data.products);
    setTotal(data.total);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  fetchProducts();
}, [page,search,sort]);

  if (loading) {
  return (
    <section className="mx-auto max-w-7xl py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}
  return (
    <section className="mx-auto max-w-7xl py-16">

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

  <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => {
    setSearch(e.target.value);
    setPage(1);
  }}
  className="w-full rounded-xl border px-5 py-3 outline-none transition focus:border-black md:max-w-sm"
/>

  <div className="flex items-center gap-3">
<p className="text-sm text-gray-500">
  Showing{" "}
  {products.length === 0
    ? 0
    : (page - 1) * limit + 1}
  {" - "}
  {Math.min(page * limit, total)}{" "}
  of {total} products
</p>
    <span className="text-gray-500">
      Sort By
    </span>

   <select
  value={sort}
  onChange={(e) => {
    setSort(e.target.value);
    setPage(1);
  }}
  className="rounded-xl border px-4 py-3 outline-none"
>
  <option value="newest">Newest</option>
  <option value="price-asc">Price: Low to High</option>
  <option value="price-desc">Price: High to Low</option>
  <option value="name-asc">Name: A-Z</option>
</select>

  </div>

</div>
    
    {products.length === 0 ? (
  <div className="flex flex-col items-center justify-center py-20">
    <h2 className="text-2xl font-semibold">
      No Products Found
    </h2>

    <p className="mt-2 text-gray-500">
      Try searching with a different keyword.
    </p>
  </div>
) : (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
    {products.map((product) => (
      <ProductCard
        key={product._id}
        product={product}
      />
    ))}
  </div>
)}
<div className="mt-10 flex items-center justify-center gap-2">
  <button
    onClick={() => setPage(page - 1)}
    disabled={page === 1}
    className="rounded-md border px-4 py-2 disabled:opacity-50"
  >
    Prev
  </button>

  {Array.from({ length: Math.ceil(total / limit) }).map((_, index) => (
    <button
      key={index}
      onClick={() => setPage(index + 1)}
      className={`h-10 w-10 rounded-md ${
        page === index + 1
          ? "bg-black text-white"
          : "border hover:bg-gray-100"
      }`}
    >
      {index + 1}
    </button>
  ))}

  <button
    onClick={() => setPage(page + 1)}
    disabled={page === Math.ceil(total / limit)}
    className="rounded-md border px-4 py-2 disabled:opacity-50"
  >
    Next
  </button>
</div>
    </section>
  );
}
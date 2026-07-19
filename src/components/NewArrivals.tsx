"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { getProducts } from "@/service/product";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="mx-auto max-w-7xl py-16">
      <h2 className="mb-8 text-3xl font-bold">
        New Arrivals
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}
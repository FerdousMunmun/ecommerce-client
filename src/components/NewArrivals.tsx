"use client";

import { useQuery } from "@tanstack/react-query";
import { getNewArrivals } from "@/services/product";

export default function NewArrivals() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["new-arrivals"],
    queryFn: getNewArrivals,
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <section>
      <h2 className="text-3xl font-bold">New Arrivals</h2>

      <div className="grid grid-cols-4 gap-6 mt-8">
        {data?.map((product: any) => (
          <div key={product._id}>
            {product.name}
          </div>
        ))}
      </div>
    </section>
  );
}
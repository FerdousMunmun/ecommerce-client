"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/products";
import { getProducts } from "@/service/product";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
       setProducts(data.products);
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

      <Swiper   className="px-3"
  modules={[Navigation]}
  navigation
  spaceBetween={24}
  slidesPerView={4}
  breakpoints={{
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  }}
>
  {products.map((product) => (
    <SwiperSlide key={product._id}>
      <ProductCard product={product} />
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
}
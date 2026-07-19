"use client";

import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Product } from "@/types/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={350}
          height={350}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* New Badge */}
        {product.isNew && (
          <Chip
            size="sm"
            className="absolute left-3 top-3 rounded-md bg-black text-white"
          >
            NEW
          </Chip>
        )}

        {/* Hover Icons */}
        <div className="absolute right-3 top-3 flex translate-x-10 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <Button isIconOnly radius="full" size="sm" variant="flat">
            <Heart size={18} />
          </Button>

          <Button isIconOnly radius="full" size="sm" variant="flat">
            <Eye size={18} />
          </Button>

          <Button isIconOnly radius="full" size="sm" variant="flat">
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="line-clamp-1 text-lg font-semibold">
            {product.name}
          </h3>

          <span className="font-bold text-gray-800">
            ${product.price}
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          {product.category}
        </p>

        <Button
          color="primary"
          className="mt-5 w-full"
          radius="sm"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}


import Image from "next/image";
import { Button, Chip } from "@heroui/react";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { Product } from "@/types/products";
import { addToCart } from "@/service/cart";
import { toast } from "sonner";
import Link from "next/link";
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {


const handleAddToCart = async () => {
  try {
    const result = await addToCart({
  ...product,
  quantity: 1,
});

    if (result.success) {
      toast.success("Added to Cart 🛒", {
  description: `${product.name} was added successfully.`,
});
    } else {
      toast.warning("Already in your cart 🛒", {
  description: "This product has already been added.",
});
    }
  } catch (error) {
    console.error(error);

    toast.error("Something went wrong");
  }
};
  return (
   <div className="group overflow-hidden rounded-xl border bg-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Link href={`/products/${product._id}`}>
  <Image
    src={product.image}
    alt={product.name}
    width={350}
    height={350}
    className="h-72 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
  />
</Link>

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
          <Button isIconOnly   className="rounded-full" size="sm" variant="ghost">
            <Heart size={18} />
          </Button>

          <Button isIconOnly   className="rounded-full" size="sm" variant="ghost">
            <Eye size={18} />
          </Button>

          <Button isIconOnly   className="rounded-full" size="sm" variant="ghost">
            <ShoppingCart size={18} />
          </Button>
        </div>
      </div>

      {/* Content */}
   <div className="p-4 min-h-[170px]">
        <div className="flex items-center justify-between">
    <Link href={`/products/${product._id}`}>
  <h3 className="line-clamp-1 text-lg font-semibold hover:text-[#9C6B3F] transition">
    {product.name}
  </h3>
</Link>

          <span className="font-bold text-gray-800">
            ${product.price}
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-500">
          {product.category}
        </p>

      <div className="mt-5 transform space-y-3 text-sm opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 translate-y-4">
  <button className="flex w-full items-center justify-end gap-2 text-gray-600 transition hover:text-black">
    Add to Wish List
    <Heart size={16} />
  </button>

  <button className="flex w-full items-center justify-end gap-2 text-gray-600 transition hover:text-black">
    Compare
    <Eye size={16} />
  </button>

  <button  onClick={handleAddToCart}
  className="flex w-full items-center justify-end gap-2 font-semibold text-black transition hover:text-[#9C6B3F]">
    Add to Cart
    <ShoppingCart size={16} />
  </button>
</div>
      </div>
    </div>
  );
}
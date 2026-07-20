"use client";

import { useRouter } from "next/navigation";

export default function ShopSidebar() {
  const router = useRouter();

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Shop By
      </h2>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold">
          Categories
        </h3>

        <div className="space-y-3">
          <button
            onClick={() => router.push("/shop?category=Living Room")}
            className="block text-left hover:text-blue-600"
          >
            Living Room
          </button>

          <button
            onClick={() => router.push("/shop?category=Bedroom")}
            className="block text-left hover:text-blue-600"
          >
            Bedroom
          </button>

          <button
            onClick={() => router.push("/shop?category=Lighting")}
            className="block text-left hover:text-blue-600"
          >
            Lighting
          </button>

          <button
            onClick={() => router.push("/shop?category=Decor")}
            className="block text-left hover:text-blue-600"
          >
            Decor
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold">
          Price
        </h3>

        <p className="mb-2">Under $100</p>
        <p className="mb-2">$100 - $300</p>
        <p>Above $300</p>
      </div>

      {/* Brand */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Brand
        </h3>

        <p className="mb-2">Modenza</p>
        <p className="mb-2">Lumino</p>
        <p>Comfort Plus</p>
      </div>

      <button
        onClick={() => router.push("/shop")}
        className="mt-8 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
      >
        Clear Filters
      </button>
    </aside>
  );
}
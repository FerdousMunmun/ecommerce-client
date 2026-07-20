"use client";

import { Checkbox, Radio, RadioGroup } from "@heroui/react";

export default function ShopSidebar() {
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
          <Checkbox>Living Room</Checkbox>
          <Checkbox>Bedroom</Checkbox>
          <Checkbox>Lighting</Checkbox>
          <Checkbox>Decor</Checkbox>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold">
          Price
        </h3>

        <RadioGroup>
          <Radio value="1">Under $100</Radio>
          <Radio value="2">$100 - $300</Radio>
          <Radio value="3">Above $300</Radio>
        </RadioGroup>
      </div>

      {/* Brand */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Brand
        </h3>

        <div className="space-y-3">
          <Checkbox>Modenza</Checkbox>
          <Checkbox>Lumino</Checkbox>
          <Checkbox>Comfort Plus</Checkbox>
        </div>
      </div>
<button className="mt-8 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
  Clear Filters
</button>
    </aside>
  );
}
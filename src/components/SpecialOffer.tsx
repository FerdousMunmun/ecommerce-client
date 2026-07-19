import Image from "next/image";
import { Button } from "@heroui/react";

export default function SpecialOffer() {
  return (
    <section className="mx-auto my-20 max-w-7xl px-4">
      <div className="relative h-[420px] overflow-hidden rounded-3xl">
        <Image
          src="/images/special-offer.jpg"
          alt="Special Offer"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute left-10 top-1/2 max-w-lg -translate-y-1/2 text-white">
          <p className="mb-3 text-lg uppercase tracking-widest">
            Limited Time Offer
          </p>

          <h2 className="mb-5 text-5xl font-bold">
            Save Up To 40% On Premium Furniture
          </h2>

          <p className="mb-8 text-lg text-gray-200">
            Upgrade your home with our newest collection.
          </p>

          <Button
            radius="full"
            className="bg-[#9C6B3F] px-8 py-7 text-lg font-semibold text-white hover:bg-[#7D542F]"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
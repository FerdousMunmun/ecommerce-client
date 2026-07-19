"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

export default function PromoSection() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
        {/* Left Card */}
        <div className="group relative overflow-hidden rounded-2xl">
          <Image
            src="/images/promo1.jpg"
            alt="Bedroom Collection"
            width={700}
            height={800}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-8 left-8">
            <h2 className="text-4xl font-bold text-white">
              Bedroom Collection
            </h2>

            <p className="mt-3 text-lg text-white">
              Up to <span className="font-bold text-3xl">30%</span> Off
            </p>

            <Button color="primary" className="mt-6">
              Shop Now
            </Button>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src="/images/promo2.jpg"
              alt="Living Room"
              width={700}
              height={350}
              className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute left-8 top-8">
              <h2 className="text-3xl font-bold text-white">
                Living Room
              </h2>

              <p className="mt-2 text-white">
                Up to <span className="text-3xl font-bold">40%</span> Off
              </p>

              <Button color="primary" className="mt-5">
                Shop Now
              </Button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src="/images/promo3.jpg"
              alt="Home Decor"
              width={700}
              height={350}
              className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute left-8 top-8">
              <h2 className="text-3xl font-bold text-white">
                Home Decor
              </h2>

              <p className="mt-2 text-white">
                Up to <span className="text-3xl font-bold">50%</span> Off
              </p>

              <Button color="primary" className="mt-5">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { Button } from "@heroui/react";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <section className="relative min-h-[600px]">
      {/* Hero Banner */}


      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-violet-50">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
              <div>
                <h1 className="text-5xl font-bold">
                  Final <span className="text-violet-600">Offer</span>
                </h1>

                <p className="mt-6 text-gray-600">
                  Up to <span className="text-4xl font-bold">50%</span> off on all
                  furniture.
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    radius="full"
                    className="bg-[#7B4F2C] px-6 text-white transition hover:bg-[#5F3D21]"
                  >
                    Shop Now
                  </Button>

                  <Button
                    variant="bordered"
                    radius="sm"
                    size="lg"
                  >
                    View Products
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/headphone.jpg"
                  alt="Headphone"
                  width={650}
                  height={650}
                  className="w-full max-w-[600px] object-contain animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-violet-50 via-pink-50 to-white">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
              <div>
                <h1 className="text-6xl font-extrabold leading-tight">
                  Modern <span className="text-violet-600">Living</span>
                </h1>

                <p className="mt-6 max-w-md text-lg text-gray-600">
                  Premium furniture crafted for comfort, style, and everyday living.
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
                    radius="full"
                    className="bg-[#7B4F2C] px-6 text-white transition hover:bg-[#5F3D21]"
                  >
                    Shop Now
                  </Button>

                  <Button variant="bordered">
                    View Products
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/chair.jpg"
                  alt="Chair"
                  width={650}
                  height={650}
                  className="w-full max-w-[600px] object-contain animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
              <div>
                <h1 className="text-5xl font-bold">
                  New <span className="text-violet-600">Collection</span>
                </h1>

                <p className="mt-6 text-gray-600">
                  Discover our latest home décor collection.
                </p>

                <div className="mt-8 flex gap-4">
                  <Button
  radius="full"
  className="bg-[#7B4F2C] px-6 text-white transition hover:bg-[#5F3D21]"
>
  Explore
</Button>

                  <Button variant="bordered">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/images/tablelamp.jpg"
                  alt="tablelamp"
                  width={650}
                  height={650}
                  className="w-full max-w-[600px] object-contain animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>



    </section>




  );
}
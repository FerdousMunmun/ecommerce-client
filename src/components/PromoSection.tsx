"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

export default function PromoSection() {
    return (
        <section className="py-16">
            <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-2">
                {/* Left Card */}
                <div className="group relative h-[518px] overflow-hidden rounded-2xl">
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

                        <Button
                              
                            className="bg-[#7B4F2C] px-6 text-white transition hover:bg-[#5F3D21] rounded-full"
                        >
                            Shop Now
                        </Button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex h-[518px] flex-col gap-6">
                    {/* Card 1 */}
                    <div className="group relative flex-1 overflow-hidden rounded-2xl">
                        <Image
                            src="/images/promo2.jpg"
                            alt="Living Room"
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute left-8 top-8">
                            <h2 className="text-3xl font-bold text-white">
                                Living Room
                            </h2>

                            <p className="mt-2 text-white">
                                Up to <span className="text-3xl font-bold">40%</span> Off
                            </p>

                            <Button
                                
                                className="bg-[#7B4F2C] px-6 text-white transition hover:bg-[#5F3D21] rounded-full"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative flex-1 overflow-hidden rounded-2xl">
                        <Image
                            src="/images/promo3.jpg"
                            alt="Home Decor"
                            fill
                            className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute left-8 top-8">
                            <h2 className="text-3xl font-bold text-white">
                                Home Decor
                            </h2>

                            <p className="mt-2 text-white">
                                Up to <span className="text-3xl font-bold">50%</span> Off
                            </p>

                            <Button
                               
                                className="bg-[#7B4F2C] px-6 text-white transition hover:bg-[#5F3D21] rounded-full"
                            >
                                Shop Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
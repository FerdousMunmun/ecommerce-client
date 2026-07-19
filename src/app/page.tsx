import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import PromoSection from "@/components/PromoSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <PromoSection/>
      <NewArrivals/>
    </div>
  );
}

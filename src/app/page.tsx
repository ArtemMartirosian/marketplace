import OffersSection from "@/features/offers/components/OffersSection";
import LotsSection from "@/features/lots/components/LotsSection";
import Hero from "@/features/hero/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <Hero/>
        <LotsSection/>
        <OffersSection/>
    </div>
  );
}

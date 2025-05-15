import OffersSection from "@/features/offers/components/OffersSection";
import LotsSection from "@/features/lots/components/LotsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
        <LotsSection/>
        <OffersSection/>
    </div>
  );
}

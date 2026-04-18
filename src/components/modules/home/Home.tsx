import PopularProductsSection from "../product/PopularProductsSection";
import PromoAndFeaturesSection from "../product/PromoAndFeaturesSection";
import Categories from "./categories";
import DealSection from "./DealSection";
import Hero from "./hero";

export default function Home() {
  return (
    <div className=" w-full mx-auto">
      <Hero/>
      <div className="">
        <Categories/>
      </div>
      <div>
        <PopularProductsSection />
    </div>
    <div>
      <PromoAndFeaturesSection />
    </div>
    <div>
      <DealSection />
    </div>
    </div>
  )
}

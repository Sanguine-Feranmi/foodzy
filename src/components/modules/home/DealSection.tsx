import DealBanner from "./DealBanner"
import RotatingFoodGrid from "./RotatingFoodGrid"

type RotatingItem = {
  id: number
  title: string
  description: string
  discount: string
  image: string
  route: string
}

type DealBannerConfig = {
  bgImage: string
  discountText: string
  title: string
  description: string
  dealEndTime: string
  buttonText: string
  buttonRoute: string
}

const defaultRotatingItems: RotatingItem[] = [
  {
    id: 1,
    title: "Organic Pasta Meals",
    description: "Hot & spicy meals made with fresh ingredients.",
    discount: "30% OFF",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=900&q=80",
    route: "/products?category=Snacks",
  },
  {
    id: 2,
    title: "Fresh Pizza Special",
    description: "Crunchy crust with premium cheese toppings.",
    discount: "25% OFF",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    route: "/products?category=Bakery",
  },
  {
    id: 3,
    title: "Organic & Healthy Vegetables",
    description: "100% fresh farm vegetables delivered to you.",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    route: "/products?category=Vegetables",
  },
]

const defaultBannerConfig: DealBannerConfig = {
  bgImage: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=80",
  discountText: "35% Off",
  title: "Great deal on organic food.",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
  dealEndTime: "2026-12-31T23:59:59",
  buttonText: "Shop Now",
  buttonRoute: "/products",
}

interface DealSectionProps {
  rotatingItems?: RotatingItem[]
  bannerConfig?: DealBannerConfig
}

const DealSection = ({
  rotatingItems = defaultRotatingItems,
  bannerConfig = defaultBannerConfig,
}: DealSectionProps) => {
  return (
    <section className="w-full py-14 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* TOP BIG BANNER */}
        <DealBanner
          bgImage={bannerConfig.bgImage}
          discountText={bannerConfig.discountText}
          title={bannerConfig.title}
          description={bannerConfig.description}
          dealEndTime={bannerConfig.dealEndTime}
          buttonText={bannerConfig.buttonText}
          buttonRoute={bannerConfig.buttonRoute}
        />

        {/* BOTTOM ROTATING GRID */}
        <RotatingFoodGrid items={rotatingItems} />
      </div>
    </section>
  );
};

export default DealSection;
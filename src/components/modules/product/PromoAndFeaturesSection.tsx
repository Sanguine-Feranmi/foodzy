import PromoBanners from "./PromoBanners"
import ServiceFeatures from "./ServiceFeatures"
import { Package, Headset, Truck, ShieldCheck } from "lucide-react"

const banners = [
  {
    id: 1,
    title: "Healthy Bakery Products",
    discount: "30%",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=500&q=80",
    bg: "bg-emerald-200",
    filterType: "category" as const,
    filterValue: "Bakery",
  },
  {
    id: 2,
    title: "Fresh Snacks & Sweets",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=500&q=80",
    bg: "bg-orange-200",
    filterType: "category" as const,
    filterValue: "Snacks",
  },
  {
    id: 3,
    title: "Fresh & Healthy Organic Fruits",
    discount: "35%",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=500&q=80",
    bg: "bg-pink-200",
    filterType: "category" as const,
    filterValue: "Fruits",
  },
]

const features = [
  {
    id: 1,
    title: "Product Packing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: Package,
  },
  {
    id: 2,
    title: "24X7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: Headset,
  },
  {
    id: 3,
    title: "Delivery in 5 Days",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: Truck,
  },
  {
    id: 4,
    title: "Payment Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    icon: ShieldCheck,
  },
]

export default function PromoAndFeaturesSection() {
  return (
    <div>
      <PromoBanners banners={banners} />
      <ServiceFeatures features={features} />
    </div>
  )
}

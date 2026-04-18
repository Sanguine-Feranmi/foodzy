import SimplePage from "@/components/ui/common/SimplePage"
import { ShoppingCart, Heart, Search, Star, Bell, Home, User, Settings, Truck, Package } from "lucide-react"

const icons = [
  { name: "ShoppingCart", icon: ShoppingCart },
  { name: "Heart", icon: Heart },
  { name: "Search", icon: Search },
  { name: "Star", icon: Star },
  { name: "Bell", icon: Bell },
  { name: "Home", icon: Home },
  { name: "User", icon: User },
  { name: "Settings", icon: Settings },
  { name: "Truck", icon: Truck },
  { name: "Package", icon: Package },
]

export default function IconsPage() {
  return (
    <SimplePage title="Icons" subtitle="Icon library used across the site.">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {icons.map(({ name, icon: Icon }) => (
          <div key={name} className="flex flex-col items-center gap-2 border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
            <Icon size={24} className="text-gray-700" />
            <span className="text-xs text-gray-500">{name}</span>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

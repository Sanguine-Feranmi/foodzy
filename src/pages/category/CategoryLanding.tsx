import { Link } from "react-router-dom"
import SimplePage from "@/components/ui/common/SimplePage"

const categories = [
  { title: "Fruits & Vegetables", href: "/category/fruits-vegetables", description: "Fresh farm produce delivered daily.", icon: "🥬" },
  { title: "Meat & Seafood", href: "/category/meat-seafood", description: "Premium cuts and fresh seafood.", icon: "🥩" },
  { title: "Dairy & Eggs", href: "/category/dairy-eggs", description: "Farm-fresh dairy and free-range eggs.", icon: "🥛" },
  { title: "Bakery", href: "/category/bakery", description: "Freshly baked breads, cakes and pastries.", icon: "🍞" },
  { title: "Snacks", href: "/category/snacks", description: "Chips, nuts, and healthy snack options.", icon: "🍿" },
  { title: "Beverages", href: "/category/beverages", description: "Juices, teas, coffees and more.", icon: "🧃" },
]

export default function CategoryLanding() {
  return (
    <SimplePage title="Categories" subtitle="Browse our wide range of food categories.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.href}
            to={cat.href}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
          >
            <div className="text-4xl mb-3">{cat.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{cat.description}</p>
          </Link>
        ))}
      </div>
    </SimplePage>
  )
}

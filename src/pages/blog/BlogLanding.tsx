import { Link } from "react-router-dom"
import SimplePage from "@/components/ui/common/SimplePage"

const blogCategories = [
  { title: "Healthy Eating", href: "/blog/healthy-eating", description: "Tips and guides for a healthier lifestyle.", icon: "🥗" },
  { title: "Recipes", href: "/blog/recipes", description: "Delicious recipes using our products.", icon: "👨‍🍳" },
  { title: "News", href: "/blog/news", description: "Latest updates from our store.", icon: "📰" },
]

export default function BlogLanding() {
  return (
    <SimplePage title="Blog" subtitle="Explore our latest articles, recipes, and healthy eating tips.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogCategories.map((cat) => (
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

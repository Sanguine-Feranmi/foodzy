import { Link } from "react-router-dom"
import SimplePage from "@/components/ui/common/SimplePage"

const elements = [
  { title: "Buttons", href: "/elements/buttons", description: "UI button styles and variants.", icon: "🔘" },
  { title: "Cards", href: "/elements/cards", description: "Product and content card components.", icon: "🃏" },
  { title: "Forms", href: "/elements/forms", description: "Input fields, selects and form layouts.", icon: "📝" },
  { title: "Icons", href: "/elements/icons", description: "Icon library used across the site.", icon: "🎨" },
]

export default function ElementsLanding() {
  return (
    <SimplePage title="Elements" subtitle="Explore our UI components and design elements.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {elements.map((element) => (
          <Link
            key={element.href}
            to={element.href}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
          >
            <div className="text-4xl mb-3">{element.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">{element.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{element.description}</p>
          </Link>
        ))}
      </div>
    </SimplePage>
  )
}

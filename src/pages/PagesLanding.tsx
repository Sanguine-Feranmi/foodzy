import { Link } from "react-router-dom"
import SimplePage from "@/components/ui/common/SimplePage"

const pages = [
  { title: "About Us", href: "/pages/about", description: "Learn more about our story and mission.", icon: "ℹ️" },
  { title: "Contact", href: "/pages/contact", description: "Get in touch with our support team.", icon: "📞" },
  { title: "FAQ", href: "/pages/faq", description: "Answers to commonly asked questions.", icon: "❓" },
  { title: "Careers", href: "/pages/careers", description: "Join our growing team.", icon: "💼" },
]

export default function PagesLanding() {
  return (
    <SimplePage title="Pages" subtitle="Explore all our informational pages.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pages.map((page) => (
          <Link
            key={page.href}
            to={page.href}
            className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
          >
            <div className="text-4xl mb-3">{page.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition">{page.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{page.description}</p>
          </Link>
        ))}
      </div>
    </SimplePage>
  )
}

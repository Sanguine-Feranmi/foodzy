import { useState } from "react"
import { Logs, PhoneCall, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import logo from "/logo.png"
import { productsData } from "@/components/modules/product/productsData"

const productCategories = [...new Set(productsData.map((p) => p.category))]

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Category", href: "#",
    children: [
      { label: "Fruits & Vegetables", href: "/category/fruits-vegetables" },
      { label: "Meat & Seafood", href: "/category/meat-seafood" },
      { label: "Dairy & Eggs", href: "/category/dairy-eggs" },
      { label: "Bakery", href: "/category/bakery" },
      { label: "Snacks", href: "/category/snacks" },
      { label: "Beverages", href: "/category/beverages" },
    ],
  },
  {
    label: "Products", href: "/products",
    children: productCategories.map((cat) => ({
      label: cat,
      href: `/products?category=${encodeURIComponent(cat)}`,
    })),
  },
  {
    label: "Pages", href: "#",
    children: [
      { label: "About Us", href: "/pages/about" },
      { label: "Contact", href: "/pages/contact" },
      { label: "FAQ", href: "/pages/faq" },
    ],
  },
  {
    label: "Blogs", href: "#",
    children: [
      { label: "Healthy Eating", href: "/blog/healthy-eating" },
      { label: "Recipes", href: "/blog/recipes" },
      { label: "News", href: "/blog/news" },
    ],
  },
  {
    label: "Elements", href: "#",
    children: [
      { label: "Buttons", href: "/elements/buttons" },
      { label: "Cards", href: "/elements/cards" },
      { label: "Forms", href: "/elements/forms" },
    ],
  },
]

export default function Rnavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const { pathname } = useLocation()

  const toggleSubmenu = (label: string) =>
    setOpenSubmenu((prev) => (prev === label ? null : label))

  return (
    <div className="w-full shadow bg-white">
      <div className="flex justify-between items-center px-6 lg:px-10 py-3 lg:w-[80%] mx-auto w-full">

        {/* Hamburger — mobile only */}
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Logs size={32} absoluteStrokeWidth />}
        </button>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                to={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition hover:text-primary",
                  pathname === link.href ? "text-primary" : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone — desktop only */}
        <div className="hidden lg:flex items-center gap-2 cursor-pointer text-gray-700">
          <PhoneCall size={16} />
          <span className="text-sm">+9876543210</span>
        </div>

        {/* Logo — mobile only */}
        <div className="block lg:hidden">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        </div>
      </div>

      {/* Mobile stacked menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-md">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-50">
                  <Link
                    to={link.href}
                    onClick={() => !link.children && setMenuOpen(false)}
                    className={cn(
                      "text-sm font-medium",
                      pathname === link.href ? "text-primary" : "text-gray-700"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() => toggleSubmenu(link.label)}
                      className="text-gray-400 text-xs px-2"
                    >
                      {openSubmenu === link.label ? "▲" : "▼"}
                    </button>
                  )}
                </div>
                {link.children && openSubmenu === link.label && (
                  <div className="flex flex-col bg-gray-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        onClick={() => setMenuOpen(false)}
                        className="px-10 py-2 text-sm text-gray-600 hover:text-primary border-b border-gray-100 transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

import { useState, useEffect } from "react"
import { Logs, PhoneCall, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import logo from "/logo.png"
import { productsData } from "@/components/modules/product/productsData"

const productCategories = [...new Set(productsData.map((p) => p.category))]

type NavPosition = "top" | "bottom" | "left" | "right"

type NavLink = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Category", href: "/category",
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
    label: "Pages", href: "/pages",
    children: [
      { label: "About Us", href: "/pages/about" },
      { label: "Contact", href: "/pages/contact" },
      { label: "FAQ", href: "/pages/faq" },
    ],
  },
  {
    label: "Blogs", href: "/blog",
    children: [
      { label: "Healthy Eating", href: "/blog/healthy-eating" },
      { label: "Recipes", href: "/blog/recipes" },
      { label: "News", href: "/blog/news" },
    ],
  },
  {
    label: "Elements", href: "/elements",
    children: [
      { label: "Buttons", href: "/elements/buttons" },
      { label: "Cards", href: "/elements/cards" },
      { label: "Forms", href: "/elements/forms" },
    ],
  },
]

const positionClasses: Record<NavPosition, string> = {
  top: "top-0 left-0 right-0 w-full",
  bottom: "bottom-0 left-0 right-0 w-full",
  left: "top-0 left-0 h-full w-64 flex-col",
  right: "top-0 right-0 h-full w-64 flex-col",
}

interface RnavbarProps {
  position?: NavPosition
}

export default function Rnavbar({ position = "top" }: RnavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [scrolledPast, setScrolledPast] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggleSubmenu = (label: string) =>
    setOpenSubmenu((prev) => (prev === label ? null : label))

  const isVertical = position === "left" || position === "right"

  return (
    <div
      className={cn(
        "fixed z-50 bg-white shadow-md transition-all duration-300",
        positionClasses[position],
        scrolledPast ? "opacity-0 pointer-events-none -translate-y-full" : "opacity-100 pointer-events-auto translate-y-0"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 px-6 py-3",
          isVertical ? "flex-col items-start py-6 h-full overflow-y-auto" : "justify-between lg:w-[80%] mx-auto w-full"
        )}
      >
        {/* Hamburger — mobile only (top/bottom positions) */}
        {!isVertical && (
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={32} /> : <Logs size={32} absoluteStrokeWidth />}
          </button>
        )}

        {/* Logo — mobile only on top/bottom, always on left/right */}
        <div className={cn(isVertical ? "mb-6 w-full" : "block lg:hidden")}>
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        </div>

        {/* Desktop nav links — horizontal for top/bottom, vertical for left/right */}
        <nav
          className={cn(
            isVertical
              ? "flex flex-col w-full gap-1"
              : "hidden lg:flex items-center gap-1"
          )}
        >
          {navLinks.map((link) => (
            <div key={link.label} className={cn("relative", isVertical ? "w-full group" : "group")}>
              <Link
                to={link.href}
                className={cn(
                  "text-sm font-medium transition hover:text-primary",
                  isVertical
                    ? "flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-gray-50"
                    : "px-3 py-2 rounded-md block",
                  pathname === link.href ? "text-primary" : "text-gray-700"
                )}
                onClick={() => !link.children && !isVertical && setMenuOpen(false)}
              >
                {link.label}
                {link.children && isVertical && (
                  <button
                    onClick={(e) => { e.preventDefault(); toggleSubmenu(link.label) }}
                    className="text-gray-400 text-xs"
                  >
                    {openSubmenu === link.label ? "▲" : "▼"}
                  </button>
                )}
              </Link>

              {/* Horizontal dropdown */}
              {link.children && !isVertical && (
                <div className={cn(
                  "absolute mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",
                  position === "bottom" ? "bottom-full top-auto mb-1" : "top-full"
                )}>
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Vertical submenu */}
              {link.children && isVertical && openSubmenu === link.label && (
                <div className="flex flex-col bg-gray-50 rounded-md mt-1 mb-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="px-6 py-2 text-sm text-gray-600 hover:text-primary transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Phone — desktop only (top/bottom) */}
        {!isVertical && (
          <div className="hidden lg:flex items-center gap-2 cursor-pointer text-gray-700">
            <PhoneCall size={16} />
            <span className="text-sm">+9876543210</span>
          </div>
        )}
      </div>

      {/* Mobile stacked menu — top/bottom only */}
      {!isVertical && menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-md">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-50">
                  <Link
                    to={link.href}
                    onClick={() => { setMenuOpen(false); setOpenSubmenu(null) }}
                    className={cn(
                      "text-sm font-medium",
                      pathname === link.href ? "text-primary" : "text-gray-700"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSubmenu(link.label) }}
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
                        onClick={() => { setMenuOpen(false); setOpenSubmenu(null) }}
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

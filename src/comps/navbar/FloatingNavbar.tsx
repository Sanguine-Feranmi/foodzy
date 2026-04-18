import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  Home,
  LayoutGrid,
  ShoppingBag,
  FileText,
  BookOpen,
  Layers,
} from "lucide-react"

type NavPosition = "top" | "bottom" | "left" | "right"

type FloatingNavItem = {
  icon: React.ElementType
  href: string
  label: string
}

const defaultItems: FloatingNavItem[] = [
  { icon: Home, href: "/", label: "Home" },
  { icon: LayoutGrid, href: "/category/fruits-vegetables", label: "Category" },
  { icon: ShoppingBag, href: "/products", label: "Products" },
  { icon: FileText, href: "/pages/about", label: "Pages" },
  { icon: BookOpen, href: "/blog/healthy-eating", label: "Blog" },
  { icon: Layers, href: "/elements/buttons", label: "Elements" },
]

interface FloatingNavbarProps {
  position?: NavPosition
  scrollThreshold?: number
  items?: FloatingNavItem[]
}

const positionStyles: Record<NavPosition, string> = {
  top: "top-4 left-1/2 -translate-x-1/2 flex-row",
  bottom: "bottom-4 left-1/2 -translate-x-1/2 flex-row",
  left: "left-4 top-1/2 -translate-y-1/2 flex-col",
  right: "right-4 top-1/2 -translate-y-1/2 flex-col",
}

export default function FloatingNavbar({
  position = "bottom",
  scrollThreshold = 300,
  items = defaultItems,
}: FloatingNavbarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > scrollThreshold)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollThreshold])

  return (
    <div
      className={cn(
        "fixed z-50 flex gap-1 p-2 bg-white/90 backdrop-blur-md shadow-xl rounded-full border border-gray-200 transition-all duration-300",
        positionStyles[position],
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {items.map(({ icon: Icon, href, label }) => (
        <Link
          key={href}
          to={href}
          title={label}
          className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-200"
        >
          <Icon size={18} />
        </Link>
      ))}
    </div>
  )
}

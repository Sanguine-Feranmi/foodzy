import type { ComponentPropsWithoutRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { productsData } from "@/components/modules/product/productsData"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const categoryLinks = [
  { title: "Fruits & Vegetables", href: "/category/fruits-vegetables", description: "Fresh farm produce delivered daily." },
  { title: "Meat & Seafood", href: "/category/meat-seafood", description: "Premium cuts and fresh seafood." },
  { title: "Dairy & Eggs", href: "/category/dairy-eggs", description: "Farm-fresh dairy and free-range eggs." },
  { title: "Bakery", href: "/category/bakery", description: "Freshly baked breads, cakes and pastries." },
  { title: "Snacks", href: "/category/snacks", description: "Chips, nuts, and healthy snack options." },
  { title: "Beverages", href: "/category/beverages", description: "Juices, teas, coffees and more." },
]

const productCategories = [...new Set(productsData.map((p) => p.category))]

const pageLinks = [
  { title: "About Us", href: "/pages/about", description: "Learn more about our story and mission." },
  { title: "Contact", href: "/pages/contact", description: "Get in touch with our support team." },
  { title: "FAQ", href: "/pages/faq", description: "Answers to commonly asked questions." },
  { title: "Careers", href: "/pages/careers", description: "Join our growing team." },
]

const blogLinks = [
  { title: "Healthy Eating", href: "/blog/healthy-eating", description: "Tips and guides for a healthier lifestyle." },
  { title: "Recipes", href: "/blog/recipes", description: "Delicious recipes using our products." },
  { title: "News", href: "/blog/news", description: "Latest updates from our store." },
]

const elementLinks = [
  { title: "Buttons", href: "/elements/buttons", description: "UI button styles and variants." },
  { title: "Cards", href: "/elements/cards", description: "Product and content card components." },
  { title: "Forms", href: "/elements/forms", description: "Input fields, selects and form layouts." },
  { title: "Icons", href: "/elements/icons", description: "Icon library used across the site." },
]

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* HOME — no submenu */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === "/" && "text-primary")}>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* CATEGORY */}
        <NavigationMenuItem>
          <Link to="/category">
            <NavigationMenuTrigger className={cn(pathname.startsWith("/category") && "text-primary")}>
              Category
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-2 grid-cols-2 p-4">
              {categoryLinks.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PRODUCTS */}
        <NavigationMenuItem>
          <Link to="/products">
            <NavigationMenuTrigger className={cn(pathname.startsWith("/products") && "text-primary")}>
              Products
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 grid-cols-2 p-4">
              {productCategories.map((cat) => (
                <ListItem key={cat} href={`/products?category=${encodeURIComponent(cat)}`} title={cat}>
                  Browse all {cat} products
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* PAGES */}
        <NavigationMenuItem>
          <Link to="/pages">
            <NavigationMenuTrigger className={cn(pathname.startsWith("/pages") && "text-primary")}>
              Pages
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[450px] gap-2 grid-cols-2 p-4">
              {pageLinks.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* BLOGS */}
        <NavigationMenuItem>
          <Link to="/blog">
            <NavigationMenuTrigger className={cn(pathname.startsWith("/blog") && "text-primary")}>
              Blogs
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[420px] gap-2 grid-cols-2 p-4">
              {blogLinks.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* ELEMENTS */}
        <NavigationMenuItem>
          <Link to="/elements">
            <NavigationMenuTrigger className={cn(pathname.startsWith("/elements") && "text-primary")}>
              Elements
            </NavigationMenuTrigger>
          </Link>
          <NavigationMenuContent>
            <ul className="grid w-[450px] gap-2 grid-cols-2 p-4">
              {elementLinks.map((item) => (
                <ListItem key={item.title} href={item.href} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href} className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
          <div className="text-sm font-medium leading-none mb-1">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

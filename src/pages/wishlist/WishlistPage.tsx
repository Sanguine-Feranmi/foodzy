import SimplePage from "@/components/ui/common/SimplePage"
import { Heart } from "lucide-react"

export default function WishlistPage() {
  return (
    <SimplePage title="My Wishlist" subtitle="Products you've saved for later.">
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center text-gray-400">
        <Heart size={56} strokeWidth={1} />
        <p className="text-sm">Your wishlist is empty.</p>
        <a href="/products" className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition">
          Browse Products
        </a>
      </div>
    </SimplePage>
  )
}

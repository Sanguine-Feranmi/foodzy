import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

type FoodItem = {
  id: number
  title: string
  description: string
  discount: string
  image: string
  route: string
}

const RotatingFoodGrid = ({ items }: { items: FoodItem[] }) => {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-md group cursor-pointer"
          onClick={() => navigate(item.route)}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Strong gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

          {/* Discount badge */}
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            {item.discount}
          </div>

          {/* Text content pinned to bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-white text-base font-bold leading-snug drop-shadow-lg line-clamp-1">
              {item.title}
            </h3>
            <p className="text-white/80 text-sm mt-1 leading-relaxed line-clamp-2">
              {item.description}
            </p>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(item.route) }}
              className="mt-3 inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-xs font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Shop Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RotatingFoodGrid

import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShoppingCart, Heart, Eye, X } from "lucide-react"
import { productsData } from "./productsData"
import type { Product } from "./productsData"
import { useCart } from "@/context/CartContext"

export default function PopularProductsSection() {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const categories = useMemo(() => {
    const uniqueCats = [...new Set(productsData.map((p) => p.category))]
    return ["All", ...uniqueCats]
  }, [])

  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filterOpen, setFilterOpen] = useState(true)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [toastProduct, setToastProduct] = useState<Product | null>(null)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return productsData
    return productsData.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    addToCart(product)
    setToastProduct(product)
    setTimeout(() => setToastProduct(null), 2500)
  }

  return (
    <section className="w-full bg-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore lacus vel facilisis.
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="mb-6 md:hidden">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-semibold text-gray-800">Filter Menu</h3>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 px-4 py-2 rounded-md hover:bg-gray-100 transition"
            >
              {filterOpen ? "Hide" : "Show"} Filters
              <span>{filterOpen ? "▲" : "▼"}</span>
            </button>
          </div>
          {filterOpen && (
            <div className="flex flex-wrap justify-center gap-3 bg-gray-50 border border-gray-200 rounded-md p-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-md text-sm font-semibold transition border ${
                    selectedCategory === cat
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Main layout — equal height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

          {/* LEFT: filter menu + banner — same height as product grid */}
          <div className="hidden md:flex lg:col-span-1 flex-col gap-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm h-full">
            {/* Category menu */}
            <div className="bg-white flex-shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full flex justify-between items-center px-5 py-3 text-sm font-semibold border-b border-gray-200 transition ${
                    selectedCategory === cat
                      ? "text-primary bg-red-50"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {cat}
                  <span>→</span>
                </button>
              ))}
            </div>

            {/* Banner — fills remaining height */}
            <div className="relative flex-1 min-h-[200px]">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                alt="Juicy Fruits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6">
                <h3 className="text-white text-3xl font-bold leading-tight">
                  Juicy <br />
                  <span className="text-yellow-300">FRUITS</span>
                </h3>
                <p className="text-white mt-3 text-sm">100% Natural</p>
                <button
                  onClick={() => navigate("/products")}
                  className="mt-5 w-fit bg-primary text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: product grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  onClick={() => setQuickViewProduct(product)}
                  className="group bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative bg-gray-50 flex items-center justify-center h-[200px] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[150px] object-contain transition duration-500 group-hover:scale-110"
                    />
                    {/* Hover actions */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        title="Add to cart"
                        className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition"
                      >
                        <ShoppingCart size={15} />
                      </button>
                      <button
                        onClick={(e) => e.stopPropagation()}
                        title="Wishlist"
                        className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition"
                      >
                        <Heart size={15} />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product) }}
                        title="Quick view"
                        className="w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition"
                      >
                        <Eye size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 text-center">
                    <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                    <div className="flex justify-center items-center gap-0.5 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.round(product.rating) ? "text-orange-400" : "text-gray-200"}`}>★</span>
                      ))}
                      <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                    </div>
                    <h2 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug line-clamp-2">{product.title}</h2>
                    <div className="flex justify-center gap-2 mt-3">
                      <p className="text-primary font-bold text-sm">${product.price}</p>
                      <p className="text-gray-400 line-through text-sm">${product.oldPrice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center text-gray-500 mt-10 text-sm">
                No products found in this category.
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => navigate("/products")}
            className="bg-gray-900 text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-black transition"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Cart toast popup */}
      {toastProduct && (
        <div className="fixed top-5 right-5 z-[60] flex items-center gap-3 bg-white border border-gray-200 shadow-xl rounded-xl px-4 py-3 animate-fadeIn max-w-[280px]">
          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
            <ShoppingCart size={18} className="text-green-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-800 line-clamp-1">{toastProduct.title}</p>
            <p className="text-xs text-green-600 font-medium">Added to cart!</p>
          </div>
          <button onClick={() => setToastProduct(null)} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
            <X size={14} />
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-xl w-full max-w-3xl shadow-2xl overflow-hidden relative animate-fadeIn">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition flex items-center justify-center text-gray-600 z-10"
            >
              <X size={16} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gray-50 flex items-center justify-center p-8">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.title}
                  className="w-full max-w-[220px] object-contain"
                />
              </div>

              <div className="p-8">
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">{quickViewProduct.category}</p>
                <h2 className="text-xl font-bold text-gray-900 leading-snug">{quickViewProduct.title}</h2>

                <div className="flex items-center gap-2 mt-3">
                  <p className="text-primary font-bold text-lg">${quickViewProduct.price}</p>
                  <p className="text-gray-400 line-through text-sm">${quickViewProduct.oldPrice}</p>
                </div>

                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-sm ${i < Math.round(quickViewProduct.rating) ? "text-orange-400" : "text-gray-200"}`}>★</span>
                  ))}
                  <span className="text-xs text-gray-400 ml-1">({quickViewProduct.rating})</span>
                </div>

                <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                  Fresh and high quality product. Available for fast delivery right to your door.
                </p>

                <div className="mt-4 flex flex-col gap-1 text-sm">
                  <p className="text-gray-700"><span className="font-semibold">Weight:</span> <span className="text-gray-500">{quickViewProduct.weight}</span></p>
                  <p className="text-gray-700"><span className="font-semibold">Tags:</span> <span className="text-gray-500">{quickViewProduct.tags.join(", ")}</span></p>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={(e) => { handleAddToCart(e, quickViewProduct); setQuickViewProduct(null) }}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary/90 transition"
                  >
                    <ShoppingCart size={16} /> Add to Cart
                  </button>
                  <button
                    onClick={() => { setQuickViewProduct(null); navigate("/products") }}
                    className="flex-1 bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-black transition"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </section>
  )
}

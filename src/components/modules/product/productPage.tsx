import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { ShoppingCart, SlidersHorizontal, X } from "lucide-react"
import { productsData } from "./productsData"
import { useCart } from "@/context/CartContext"

type Filters = {
  category: string
  weight: string
  minPrice: number
  maxPrice: number
  price: number
  tags: string[]
}

const defaultFilters: Filters = {
  category: "", weight: "", minPrice: 0, maxPrice: 250, price: 250, tags: [],
}

export default function ProductPage() {
  const [searchParams] = useSearchParams()
  const { addToCart } = useCart()
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [tempFilters, setTempFilters] = useState<Filters>(defaultFilters)
  const [appliedFilters, setAppliedFilters] = useState<Filters>(defaultFilters)
  const [addedId, setAddedId] = useState<number | null>(null)

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    productsData.forEach((p) => { counts[p.category] = (counts[p.category] ?? 0) + 1 })
    return counts
  }, [])

  const weights = useMemo(() => [...new Set(productsData.map((p) => p.weight))], [])
  const tags = useMemo(() => [...new Set(productsData.flatMap((p) => p.tags))], [])

  const priceRange = useMemo(() => {
    const prices = productsData.map((p) => p.price)
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) }
  }, [])

  useEffect(() => {
    const category = searchParams.get("category") ?? ""
    const init: Filters = {
      ...defaultFilters,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      price: priceRange.max,
      category,
    }
    setTempFilters(init)
    setAppliedFilters(init)
  }, [priceRange.min, priceRange.max, searchParams])

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchCat = !appliedFilters.category || p.category === appliedFilters.category
      const matchWeight = !appliedFilters.weight || p.weight === appliedFilters.weight
      const matchPrice = p.price <= appliedFilters.price
      const matchTags =
        appliedFilters.tags.length === 0 ||
        appliedFilters.tags.every((t) => p.tags.includes(t))
      return matchCat && matchWeight && matchPrice && matchTags
    })
  }, [appliedFilters])

  const toggleTag = (tag: string) =>
    setTempFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }))

  const applyFilters = () => {
    setAppliedFilters(tempFilters)
    setMobileFilterOpen(false)
  }

  const resetFilters = () => {
    const reset: Filters = {
      category: "", weight: "",
      minPrice: priceRange.min, maxPrice: priceRange.max, price: priceRange.max, tags: [],
    }
    setTempFilters(reset)
    setAppliedFilters(reset)
  }

  const handleAddToCart = (product: typeof productsData[0]) => {
    addToCart(product)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1200)
  }

  const FilterPanel = (
    <div className="flex flex-col gap-6">
      {/* CATEGORY */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3 text-sm">Product Category</h3>
        <div className="flex flex-col gap-2 text-sm">
          {Object.keys(categoryCounts).map((cat) => (
            <label key={cat} className="flex items-center justify-between text-gray-600 cursor-pointer">
              <div className="flex items-center gap-2">
                <input
                  type="radio" name="category"
                  checked={tempFilters.category === cat}
                  onChange={() => setTempFilters((prev) => ({ ...prev, category: cat }))}
                  className="accent-primary"
                />
                <span>{cat}</span>
              </div>
              <span className="text-gray-400 text-xs">[{categoryCounts[cat]}]</span>
            </label>
          ))}
          <button
            onClick={() => setTempFilters((prev) => ({ ...prev, category: "" }))}
            className="text-xs text-primary mt-1 underline text-left"
          >
            Clear
          </button>
        </div>
      </div>

      {/* PRICE */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3 text-sm">Filter By Price</h3>
        <p className="text-xs text-gray-500 mb-2">
          ${tempFilters.minPrice} — ${tempFilters.price}
        </p>
        <input
          type="range"
          min={tempFilters.minPrice} max={tempFilters.maxPrice} value={tempFilters.price}
          onChange={(e) => setTempFilters((prev) => ({ ...prev, price: Number(e.target.value) }))}
          className="w-full accent-primary cursor-pointer"
        />
      </div>

      {/* WEIGHT */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3 text-sm">Weight</h3>
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          {weights.map((w) => (
            <label key={w} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio" name="weight"
                checked={tempFilters.weight === w}
                onChange={() => setTempFilters((prev) => ({ ...prev, weight: w }))}
                className="accent-primary"
              />
              <span>{w}</span>
            </label>
          ))}
          <button
            onClick={() => setTempFilters((prev) => ({ ...prev, weight: "" }))}
            className="text-xs text-primary mt-1 underline text-left"
          >
            Clear
          </button>
        </div>
      </div>

      {/* TAGS */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-3 text-sm">Product Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag} onClick={() => toggleTag(tag)}
              className={`text-xs px-3 py-1 rounded-full border transition ${
                tempFilters.tags.includes(tag)
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col gap-2">
        <button
          onClick={applyFilters}
          className="w-full bg-primary text-white py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition"
        >
          Apply Filters
        </button>
        <button
          onClick={resetFilters}
          className="w-full bg-gray-100 text-gray-700 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
        >
          Reset
        </button>
      </div>
    </div>
  )

  return (
    <div className="w-full bg-white py-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Mobile top bar */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-800">{filteredProducts.length}</span> items
          </p>
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 transition"
          >
            <SlidersHorizontal size={15} /> Filters
          </button>
        </div>

        {/* Mobile filter drawer */}
        {mobileFilterOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
            <div className="absolute left-0 top-0 h-full w-[300px] bg-white shadow-xl overflow-y-auto p-5">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-base font-semibold text-gray-800">Filters</h2>
                <button onClick={() => setMobileFilterOpen(false)} className="text-gray-500 hover:text-gray-800">
                  <X size={20} />
                </button>
              </div>
              {FilterPanel}
            </div>
          </div>
        )}

        {/* Main layout */}
        <div className="flex gap-6" style={{ height: "calc(100vh - 220px)" }}>

          {/* Static sidebar — desktop */}
          <div className="hidden lg:flex flex-col w-[260px] flex-shrink-0 h-full">
            <div className="bg-white border border-gray-200 rounded-md p-5 shadow-sm overflow-y-auto h-full">
              <h2 className="text-base font-semibold text-gray-800 mb-5">Filters</h2>
              {FilterPanel}
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex flex-col min-w-0 h-full">

            {/* Desktop top bar */}
            <div className="hidden lg:flex items-center justify-between bg-white border border-gray-200 rounded-md px-4 py-3 mb-4 shadow-sm flex-shrink-0">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">{filteredProducts.length}</span> items found
              </p>
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-500">Sort By:</label>
                <select className="border border-gray-200 rounded px-3 py-1 text-sm text-gray-600 outline-none">
                  <option>Featured</option>
                  <option>Lowest Price</option>
                  <option>Highest Price</option>
                </select>
              </div>
            </div>

            {/* Scrollable product grid */}
            <div className="overflow-y-auto flex-1">
              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
                  <ShoppingCart size={48} strokeWidth={1} />
                  <p className="text-sm">No products match your filters.</p>
                  <button onClick={resetFilters} className="text-sm text-primary underline">
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                      <div className="bg-gray-50 flex items-center justify-center h-[150px] sm:h-[180px]">
                        <img
                          src={product.image} alt={product.title}
                          className="h-[110px] sm:h-[130px] object-contain"
                        />
                      </div>
                      <div className="p-3 sm:p-4 text-center">
                        <p className="text-xs text-gray-400 mb-1">{product.category}</p>
                        <h2 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug line-clamp-2">
                          {product.title}
                        </h2>
                        <div className="flex justify-center items-center gap-0.5 mt-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.round(product.rating) ? "text-orange-400" : "text-gray-200"}`}>★</span>
                          ))}
                          <span className="text-xs text-gray-400 ml-1">({product.rating})</span>
                        </div>
                        <div className="flex justify-center gap-2 mt-2">
                          <p className="text-primary font-bold text-sm">${product.price}</p>
                          <p className="text-gray-400 line-through text-sm">${product.oldPrice}</p>
                        </div>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`mt-3 w-9 h-9 rounded-full border flex items-center justify-center mx-auto transition ${
                            addedId === product.id
                              ? "bg-green-500 border-green-500 text-white"
                              : "border-gray-200 text-gray-500 hover:bg-primary hover:text-white hover:border-primary"
                          }`}
                        >
                          <ShoppingCart size={15} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center pt-4 gap-2 flex-wrap flex-shrink-0">
              <button className="px-3 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-100 text-sm">Previous</button>
              {[1, 2, 3].map((n) => (
                <button key={n} className={`px-3 py-1 rounded text-sm ${n === 1 ? "bg-primary text-white" : "border border-gray-200 text-gray-500 hover:bg-gray-100"}`}>
                  {n}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-200 text-gray-500 rounded hover:bg-gray-100 text-sm">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

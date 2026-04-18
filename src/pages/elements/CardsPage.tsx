import SimplePage from "@/components/ui/common/SimplePage"

export default function CardsPage() {
  return (
    <SimplePage title="Cards" subtitle="Product and content card components.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Basic Card", desc: "A simple card with title and description.", img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80" },
          { title: "Image Card", desc: "Card featuring a full-width image on top.", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80" },
          { title: "Hover Card", desc: "This card lifts on hover with a shadow.", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=400&q=80" },
        ].map((card) => (
          <div key={card.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition group">
            <img src={card.img} alt={card.title} className="w-full h-44 object-cover group-hover:scale-105 transition duration-500" />
            <div className="p-5">
              <h3 className="text-sm font-semibold text-gray-800">{card.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

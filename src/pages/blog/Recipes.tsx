import SimplePage from "@/components/ui/common/SimplePage"

const recipes = [
  { title: "Fresh Garden Salad", time: "15 mins", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", tags: ["Vegan", "Quick"] },
  { title: "Homemade Banana Bread", time: "60 mins", img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80", tags: ["Bakery", "Sweet"] },
  { title: "Grilled Chicken Bowl", time: "30 mins", img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=600&q=80", tags: ["Protein", "Healthy"] },
]

export default function Recipes() {
  return (
    <SimplePage title="Recipes" subtitle="Delicious recipes using our fresh products.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((r) => (
          <div key={r.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={r.img} alt={r.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="flex gap-2 mb-2">
                {r.tags.map((tag) => (
                  <span key={tag} className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">{tag}</span>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-gray-800">{r.title}</h3>
              <p className="text-xs text-gray-400 mt-1">⏱ {r.time}</p>
              <button className="mt-4 text-xs text-primary font-semibold hover:underline">View Recipe →</button>
            </div>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

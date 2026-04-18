import SimplePage from "@/components/ui/common/SimplePage"

const posts = [
  { title: "10 Foods That Boost Your Immunity", date: "Jan 12, 2025", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", excerpt: "Discover the top foods scientifically proven to strengthen your immune system and keep you healthy year-round." },
  { title: "The Benefits of Eating Seasonal Produce", date: "Feb 3, 2025", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80", excerpt: "Eating with the seasons means better nutrition, lower costs, and a smaller environmental footprint." },
  { title: "How to Build a Balanced Meal Plan", date: "Mar 18, 2025", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80", excerpt: "A step-by-step guide to planning nutritious, delicious meals for the entire week." },
]

export default function HealthyEating() {
  return (
    <SimplePage title="Healthy Eating" subtitle="Tips and guides for a healthier lifestyle.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.title} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-400 mb-1">{post.date}</p>
              <h3 className="text-sm font-semibold text-gray-800 leading-snug">{post.title}</h3>
              <p className="text-xs text-gray-500 mt-2 line-clamp-3">{post.excerpt}</p>
              <button className="mt-4 text-xs text-primary font-semibold hover:underline">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

import SimplePage from "@/components/ui/common/SimplePage"

const news = [
  { title: "We Now Offer Same-Day Delivery!", date: "Apr 1, 2025", excerpt: "Exciting news — same-day delivery is now available in select cities. Order before 12PM to get your groceries by evening." },
  { title: "New Organic Range Launched", date: "Mar 15, 2025", excerpt: "We've partnered with 5 new organic farms to bring you an expanded range of certified organic products." },
  { title: "App Launch Coming Soon", date: "Feb 20, 2025", excerpt: "Our mobile app is in the final stages of development. Stay tuned for exclusive app-only deals on launch day." },
]

export default function News() {
  return (
    <SimplePage title="News" subtitle="Latest updates from our store.">
      <div className="flex flex-col gap-5">
        {news.map((item) => (
          <div key={item.title} className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <p className="text-xs text-gray-400 mb-1">{item.date}</p>
            <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.excerpt}</p>
            <button className="mt-3 text-xs text-primary font-semibold hover:underline">Read More →</button>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

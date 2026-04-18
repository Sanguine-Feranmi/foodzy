import SimplePage from "@/components/ui/common/SimplePage"

export default function AboutUs() {
  return (
    <SimplePage title="About Us" subtitle="Learn more about our story and mission.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-gray-600 text-sm leading-relaxed">
          <p>
            We are a passionate team dedicated to bringing you the freshest, highest-quality
            food products delivered straight to your door. Our mission is to make healthy
            eating accessible, convenient, and enjoyable for everyone.
          </p>
          <p>
            Founded in 2020, we partner with local farms and trusted suppliers to ensure
            every product on our platform meets our strict quality standards. From fresh
            vegetables to artisan bakery items, we curate only the best for you.
          </p>
          <p>
            Our commitment goes beyond food — we care about sustainability, community,
            and building lasting relationships with our customers.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          alt="About us"
          className="w-full h-[300px] object-cover rounded-2xl shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {[
          { stat: "50K+", label: "Happy Customers" },
          { stat: "200+", label: "Products Available" },
          { stat: "99%", label: "Satisfaction Rate" },
        ].map(({ stat, label }) => (
          <div key={label} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-primary">{stat}</p>
            <p className="text-gray-500 text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

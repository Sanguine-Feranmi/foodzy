import type { ComponentType } from "react"

type Feature = {
  id: number
  title: string
  description: string
  icon: ComponentType<{ className?: string; size?: number }>
}

const ServiceFeatures = ({ features }: { features: Feature[] }) => {
  return (
    <section className="w-full pb-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-200 transition">
                  <item.icon className="text-red-500" size={26} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-gray-900 font-semibold text-base">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-4 flex justify-center">
                <div className="w-10 h-[2px] bg-red-500 rounded-full opacity-70 group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
import { useState } from "react";
import React from "react";
import { Icon } from "lucide-react";
import { strawberry } from "@lucide/lab";
import { Cake, Beef, Leaf, Apple, ChevronRight, ShoppingCart } from "lucide-react";

type IconProps = { size?: number; className?: string }

type Category = {
  id: string
  label: string
  count: number
  icon: (props: IconProps) => React.ReactElement
  images: { src: string; label: string; discount: number }[]
}

const categories: Category[] = [
  {
    id: "cake-milk",
    label: "Cake & Milk",
    count: 65,
    icon: ({ size, className }: IconProps) => <Cake size={size} className={className} />,
    images: [
      {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
        label: "Cake",
        discount: 50,
      },
      {
        src: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
        label: "Milk",
        discount: 40,
      },
    ],
  },
  {
    id: "fresh-meat",
    label: "Fresh Meat",
    count: 30,
    icon: ({ size, className }: IconProps) => <Beef size={size} className={className} />,
    images: [
      {
        src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80",
        label: "Beef",
        discount: 35,
      },
      {
        src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
        label: "Chicken",
        discount: 25,
      },
    ],
  },
  {
    id: "vegetables",
    label: "Vegetables",
    count: 25,
    icon: ({ size, className }: IconProps) => <Leaf size={size} className={className} />,
    images: [
      {
        src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
        label: "Salad Mix",
        discount: 20,
      },
      {
        src: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&q=80",
        label: "Tomatoes",
        discount: 15,
      },
    ],
  },
  {
    id: "apple-mango",
    label: "Apple & Mango",
    count: 45,
    icon: ({ size, className }: IconProps) => <Apple size={size} className={className} />,
    images: [
      {
        src: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&q=80",
        label: "Apples",
        discount: 30,
      },
      {
        src: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=500&q=80",
        label: "Mango",
        discount: 45,
      },
    ],
  },
  {
    id: "strawberry",
    label: "Strawberry",
    count: 68,
    icon: ({ size, className }: IconProps) => (
      <Icon iconNode={strawberry} size={size} className={className} />
    ),
    images: [
      {
        src: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&q=80",
        label: "Strawberries",
        discount: 55,
      },
      {
        src: "https://images.unsplash.com/photo-1518635017498-87f514b751ba?w=500&q=80",
        label: "Berry Mix",
        discount: 38,
      },
    ],
  },
];

export default function Categories() {
  const [activeId, setActiveId] = useState("cake-milk");
  const [animating, setAnimating] = useState(false);

  const activeCategory = categories.find((c) => c.id === activeId);

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveId(id);
      setAnimating(false);
    }, 220);
  };

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">

        {/* ── LEFT: Category List ── */}
        <div className="w-full md:w-56 flex-shrink-0 flex flex-col gap-2">
          {categories.map(({ id, label, count, icon: IconComp }) => {
            const isActive = activeId === id;
            return (
              <div
                key={id}
                onClick={() => handleSelect(id)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer
                  transition-all duration-200
                  ${isActive
                    ? "bg-red-50 border-red-300"
                    : "bg-white border-gray-200 hover:bg-red-50"
                  }
                `}
              >
                <IconComp
                  size={18}
                  className={`flex-shrink-0 transition-colors duration-200 ${
                    isActive ? "text-red-500" : "text-gray-400"
                  }`}
                />
                <div className="flex flex-col leading-tight">
                  <span
                    className={`text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-gray-800 font-medium"
                    }`}
                  >
                    {label}
                  </span>
                  <span className="text-xs text-gray-400">({count} items)</span>
                </div>
              </div>
            );
          })}

          <button className="mt-2 self-center flex items-center gap-1 text-red-500 font-semibold text-sm bg-transparent border-none cursor-pointer hover:gap-2 transition-all duration-200">
            View More <ChevronRight size={16} />
          </button>
        </div>

        {/* ── RIGHT: Promo Cards ── */}
        <div className="flex-1 min-w-0">
          <div
            className={`
              flex gap-3 h-80 md:h-[340px]
              transition-all duration-[220ms] ease-in-out
              ${animating ? "opacity-0 translate-y-1.5" : "opacity-100 translate-y-0"}
            `}
          >
            {activeCategory?.images.map((img, i) => (
              <div
                key={i}
                className="relative flex-1 min-w-0 overflow-hidden rounded-2xl bg-black group cursor-pointer"
              >
                {/* Background image */}
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover opacity-80 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-70"
                />

                {/* Discount badge */}
                <div className="absolute top-3.5 left-3.5 flex items-baseline gap-0.5 bg-black text-white rounded-xl px-2.5 py-1.5 z-10">
                  <span className="text-3xl font-extrabold leading-none">
                    {img.discount}
                  </span>
                  <div className="flex flex-col text-[0.6rem] font-bold leading-tight">
                    <span>%</span>
                    <span>OFF</span>
                  </div>
                </div>

                {/*
                  Bottom overlay: uses inline style only for the gradient
                  because Tailwind cannot express multi-stop directional
                  gradients with rgba stops in plain utility classes.
                */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center gap-2.5 px-4 pb-5 pt-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.72) 60%, transparent)",
                  }}
                >
                  <span className="text-white text-base font-bold tracking-wide">
                    {img.label}
                  </span>
                  <button className="flex items-center gap-1.5 bg-red-500 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors duration-200 cursor-pointer border-0">
                    <ShoppingCart size={14} />
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
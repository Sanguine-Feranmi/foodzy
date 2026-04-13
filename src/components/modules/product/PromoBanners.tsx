import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Banner = {
  id: number
  title: string
  discount: string
  bg: string
  image: string
  filterType: "category" | "tag" | "none"
  filterValue: string
}

const PromoBanners = ({ banners }: { banners: Banner[] }) => {
  const navigate = useNavigate();

  const handleClick = (banner: Banner) => {
    if (banner.filterType === "category") {
      navigate(`/products?category=${encodeURIComponent(banner.filterValue)}`);
    } else if (banner.filterType === "tag") {
      navigate(`/products?tag=${encodeURIComponent(banner.filterValue)}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <section className="w-full py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`relative overflow-hidden rounded-2xl shadow-sm border border-black/5 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${banner.bg}`}
            >
              {/* Decorative Circles */}
              <div className="absolute top-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-white/20 blur-sm" />
              <div className="absolute bottom-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full bg-white/20 blur-sm" />

              <div className="relative flex items-center justify-between p-6">
                {/* Text */}
                <div className="w-[60%]">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight">
                    {banner.title}
                  </h3>

                  <p className="text-sm mt-2 text-gray-800">
                    <span className="text-red-500 font-bold text-base">
                      {banner.discount}
                    </span>{" "}
                    <span className="text-gray-700">Off on first order</span>
                  </p>

                  <button
                    onClick={() => handleClick(banner)}
                    className="mt-4 inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-600 transition"
                  >
                    Shop Now
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Image Circle */}
                <div className="w-[40%] flex justify-end">
                  <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-[5px] border-white/70 shadow-md group-hover:scale-105 transition duration-300">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Premium Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-white/10 via-transparent to-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
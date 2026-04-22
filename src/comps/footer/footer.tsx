import { Facebook, Twitter, Globe, Instagram, Send, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=70",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&q=70",
  "https://images.unsplash.com/photo-1547592180-85f173990554?w=200&q=70",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=70",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=70",
];

const companyLinks = [
  { label: "About Us", href: "/pages/about" },
  { label: "Delivery Information", href: "/pages/faq" },
  { label: "Privacy Policy", href: "/pages/about" },
  { label: "Terms & Conditions", href: "/pages/about" },
  { label: "Contact Us", href: "/pages/contact" },
  { label: "Support Center", href: "/pages/contact" },
];

const categoryLinks = [
  { label: "Dairy & Bakery", href: "/products?category=Bakery" },
  { label: "Fruits & Vegetable", href: "/products?category=Fruits" },
  { label: "Snack & Spice", href: "/products?category=Snacks" },
  { label: "Juice & Drinks", href: "/products?category=Beverages" },
  { label: "Chicken & Meat", href: "/products?category=Meat" },
  { label: "Fast Food", href: "/products" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            {/* Simple logo mark */}
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg leading-none">Foodzy</p>
              <p className="text-[10px] text-gray-400 italic">A Treasure of Tastes</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            FoodTrove is the biggest market of grocery products. Get your daily needs from our store.
          </p>

          <ul className="space-y-2.5 text-sm text-gray-500">
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="text-green-500 mt-0.5 shrink-0" />
              <span>51 Green St. Huntington ohio beach ontario, NY 11746 KY 4783, USA.</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={14} className="text-green-500 shrink-0" />
              <a href="mailto:example@email.com" className="hover:text-green-600 transition-colors">
                example@email.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={14} className="text-green-500 shrink-0" />
              <a href="tel:+911234567890" className="hover:text-green-600 transition-colors">
                +91 123 4567890
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-5 text-sm uppercase tracking-wider">
            Company
          </h4>
          <ul className="space-y-2.5">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Category Links */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-5 text-sm uppercase tracking-wider">
            Category
          </h4>
          <ul className="space-y-2.5">
            {categoryLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter + Gallery */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-5 text-sm uppercase tracking-wider">
            Subscribe Our Newsletter
          </h4>

          {/* Search/Subscribe input */}
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden mb-5 bg-white">
            <input
              type="email"
              placeholder="Search here..."
              className="flex-1 text-sm px-3 py-2.5 outline-none bg-transparent text-gray-600 placeholder:text-gray-400"
            />
            <button className="bg-green-500 hover:bg-green-600 transition-colors px-3 py-2.5">
              <Send size={14} className="text-white" />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-6">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Globe, href: "#" },
              { icon: Instagram, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:border-green-500 hover:text-green-500 transition-all bg-white"
              >
                <Icon size={13} />
              </a>
            ))}
          </div>

          {/* Mini Gallery */}
          <div className="grid grid-cols-5 gap-1.5">
            {galleryImages.map((src, i) => (
              <div key={i} className="aspect-square rounded overflow-hidden">
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="text-green-500 hover:text-green-600 font-medium">
            Foodzy
          </Link>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
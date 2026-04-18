import SimplePage from "@/components/ui/common/SimplePage"
import { User, Package, MapPin, Settings } from "lucide-react"

const sections = [
  { icon: User, title: "Profile", desc: "Manage your personal information and preferences." },
  { icon: Package, title: "Orders", desc: "View your order history and track current deliveries." },
  { icon: MapPin, title: "Addresses", desc: "Add or update your saved delivery addresses." },
  { icon: Settings, title: "Settings", desc: "Update your password and notification preferences." },
]

export default function AccountPage() {
  return (
    <SimplePage title="My Account" subtitle="Manage your profile and preferences.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {sections.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-4 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md cursor-pointer transition group">
            <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition">
              <Icon size={20} className="text-primary group-hover:text-white transition" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

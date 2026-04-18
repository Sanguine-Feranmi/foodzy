import { Link } from "react-router-dom"
import { User } from "lucide-react"

export default function Headsheet() {
  return (
    <Link to="/account" className="flex items-center gap-1.5 text-sm text-gray-700 hover:text-primary transition cursor-pointer">
      <User size={20} />
      <span className="hidden sm:inline text-xs font-medium">Account</span>
    </Link>
  )
}

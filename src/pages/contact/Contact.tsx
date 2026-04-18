import { useState } from "react"
import type { FormEvent } from "react"
import SimplePage from "@/components/ui/common/SimplePage"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <SimplePage title="Contact Us" subtitle="We'd love to hear from you.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="flex flex-col gap-6">
          {[
            { icon: Mail, label: "Email", value: "support@foodstore.com" },
            { icon: Phone, label: "Phone", value: "+9876543210" },
            { icon: MapPin, label: "Address", value: "123 Market Street, Food City, FC 10001" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
                <p className="text-gray-700 text-sm mt-0.5">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="flex flex-col items-center justify-center gap-3 bg-green-50 border border-green-200 rounded-xl p-10 text-center">
            <p className="text-green-600 font-semibold text-lg">Message Sent!</p>
            <p className="text-gray-500 text-sm">We'll get back to you within 24 hours.</p>
            <button onClick={() => setSent(false)} className="text-primary text-sm underline mt-2">Send another</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {[
              { label: "Name", type: "text", placeholder: "John Doe" },
              { label: "Email", type: "email", placeholder: "john@example.com" },
            ].map(({ label, type, placeholder }) => (
              <div key={label}>
                <label className="text-xs font-medium text-gray-600 mb-1 block">{label}</label>
                <input type={type} placeholder={placeholder} required className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium text-gray-600 mb-1 block">Message</label>
              <textarea rows={4} required placeholder="Your message..." className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2.5 rounded-md font-semibold text-sm hover:bg-primary/90 transition">
              Send Message
            </button>
          </form>
        )}
      </div>
    </SimplePage>
  )
}

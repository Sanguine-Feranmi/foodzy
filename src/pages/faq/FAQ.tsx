import { useState } from "react"
import SimplePage from "@/components/ui/common/SimplePage"
import { ChevronDown } from "lucide-react"

const faqs = [
  { q: "How do I place an order?", a: "Browse our products, add items to your cart, and proceed to checkout. Fill in your shipping and payment details to complete your order." },
  { q: "What payment methods do you accept?", a: "We accept credit/debit cards and cash on delivery." },
  { q: "How long does delivery take?", a: "Standard delivery takes 3–5 business days. Express delivery options are available at checkout." },
  { q: "Can I return or exchange a product?", a: "Yes, we accept returns within 7 days of delivery for items in their original condition. Contact our support team to initiate a return." },
  { q: "Are your products organic?", a: "Many of our products are certified organic. Look for the organic badge on product listings." },
  { q: "How do I track my order?", a: "Once your order is dispatched, you'll receive a tracking link via email to monitor delivery status." },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <SimplePage title="Frequently Asked Questions" subtitle="Find answers to common questions below.">
      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.q}
              <ChevronDown
                size={18}
                className={`text-gray-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </SimplePage>
  )
}

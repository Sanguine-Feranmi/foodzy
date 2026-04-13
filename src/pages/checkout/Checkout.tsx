import { useState } from "react"
import type { FormEvent } from "react"
import { Link } from "react-router-dom"
import { CheckCircle, ShoppingBag } from "lucide-react"
import { useCart } from "@/context/CartContext"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  zip: string
  country: string
  paymentMethod: "card" | "cash"
  cardNumber: string
  cardExpiry: string
  cardCvc: string
}

const empty: FormData = {
  firstName: "", lastName: "", email: "", phone: "",
  address: "", city: "", zip: "", country: "",
  paymentMethod: "card", cardNumber: "", cardExpiry: "", cardCvc: "",
}

export default function Checkout() {
  const { items, total, count, clearCart } = useCart()
  const [form, setForm] = useState<FormData>(empty)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [ordered, setOrdered] = useState(false)

  const set = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  const validate = () => {
    const e: Partial<FormData> = {}
    if (!form.firstName) e.firstName = "Required"
    if (!form.lastName) e.lastName = "Required"
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required"
    if (!form.phone) e.phone = "Required"
    if (!form.address) e.address = "Required"
    if (!form.city) e.city = "Required"
    if (!form.zip) e.zip = "Required"
    if (!form.country) e.country = "Required"
    if (form.paymentMethod === "card") {
      if (!form.cardNumber || form.cardNumber.replace(/\s/g, "").length < 16)
        e.cardNumber = "Valid 16-digit card number required"
      if (!form.cardExpiry || !/^\d{2}\/\d{2}$/.test(form.cardExpiry))
        e.cardExpiry = "Format: MM/YY"
      if (!form.cardCvc || form.cardCvc.length < 3)
        e.cardCvc = "3-digit CVC required"
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    clearCart()
    setOrdered(true)
  }

  if (ordered) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
        <CheckCircle size={72} className="text-green-500" strokeWidth={1.5} />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-500 text-sm max-w-md">
            Thank you, {form.firstName}! Your order has been received and is being processed.
            A confirmation will be sent to <span className="font-medium text-gray-700">{form.email}</span>.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            to="/"
            className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/products"
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  if (count === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <ShoppingBag size={64} strokeWidth={1} className="text-gray-300" />
        <p className="text-gray-500">Your cart is empty. Add items before checking out.</p>
        <Link
          to="/products"
          className="px-6 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition"
        >
          Shop Now
        </Link>
      </div>
    )
  }

  const Field = ({
    label, field, type = "text", placeholder, half,
  }: {
    label: string; field: keyof FormData; type?: string; placeholder?: string; half?: boolean
  }) => (
    <div className={half ? "flex-1 min-w-[140px]" : "w-full"}>
      <label className="text-xs font-medium text-gray-600 mb-1 block">{label}</label>
      <input
        type={type}
        value={form[field] as string}
        onChange={(e) => set(field, e.target.value)}
        placeholder={placeholder}
        className={`w-full border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition ${
          errors[field] ? "border-red-400" : "border-gray-200"
        }`}
      />
      {errors[field] && <p className="text-xs text-red-500 mt-1">{errors[field]}</p>}
    </div>
  )

  return (
    <div className="w-full py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          {/* LEFT — Form */}
          <div className="flex-1 flex flex-col gap-6">

            {/* Shipping */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">Shipping Information</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 flex-wrap">
                  <Field label="First Name" field="firstName" placeholder="John" half />
                  <Field label="Last Name" field="lastName" placeholder="Doe" half />
                </div>
                <Field label="Email" field="email" type="email" placeholder="john@example.com" />
                <Field label="Phone" field="phone" type="tel" placeholder="+1 234 567 8900" />
                <Field label="Address" field="address" placeholder="123 Main Street" />
                <div className="flex gap-3 flex-wrap">
                  <Field label="City" field="city" placeholder="New York" half />
                  <Field label="ZIP Code" field="zip" placeholder="10001" half />
                </div>
                <Field label="Country" field="country" placeholder="United States" />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h2 className="font-semibold text-gray-700 mb-4">Payment Method</h2>
              <div className="flex gap-4 mb-4">
                {(["card", "cash"] as const).map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      checked={form.paymentMethod === method}
                      onChange={() => set("paymentMethod", method)}
                      className="accent-primary"
                    />
                    <span className="text-sm capitalize text-gray-700">
                      {method === "card" ? "Credit / Debit Card" : "Cash on Delivery"}
                    </span>
                  </label>
                ))}
              </div>

              {form.paymentMethod === "card" && (
                <div className="flex flex-col gap-4">
                  <Field label="Card Number" field="cardNumber" placeholder="1234 5678 9012 3456" />
                  <div className="flex gap-3 flex-wrap">
                    <Field label="Expiry (MM/YY)" field="cardExpiry" placeholder="08/27" half />
                    <Field label="CVC" field="cardCvc" placeholder="123" half />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT — Order Summary */}
          <div className="w-full lg:w-[360px] flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm sticky top-4">
              <h2 className="font-semibold text-gray-700 mb-4">Order Summary</h2>

              <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover bg-gray-50 rounded border"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-700 line-clamp-1">{item.title}</p>
                      <p className="text-xs text-gray-400">x{item.quantity}</p>
                    </div>
                    <p className="text-xs font-semibold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 text-base border-t pt-2 mt-1">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 w-full bg-primary text-white py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from "@/context/CartContext"

export function Cart() {
  const { items, removeFromCart, updateQuantity, total, count } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative cursor-pointer p-1">
          <ShoppingCart size={22} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col w-[340px] sm:w-[400px] p-0">
        <SheetHeader className="px-5 py-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart size={18} /> Cart ({count})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400 px-5">
            <ShoppingCart size={48} strokeWidth={1} />
            <p className="text-sm">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover bg-gray-50 rounded-md border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug">
                      {item.title}
                    </p>
                    <p className="text-xs text-primary font-bold mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded border flex items-center justify-center hover:bg-gray-100"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm w-5 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border flex items-center justify-center hover:bg-gray-100"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition mt-1"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t px-5 py-4 flex flex-col gap-3">
              <div className="flex justify-between text-sm font-semibold text-gray-800">
                <span>Total</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
              <SheetClose asChild>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
              </SheetClose>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

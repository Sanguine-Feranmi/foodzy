import { Heart } from "lucide-react"
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

export function WishList() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="mine">Wishlist</Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col w-[340px] sm:w-[400px] p-0">
                <SheetHeader className="px-5 py-4 border-b">
                    <SheetTitle className="flex items-center gap-2">
                        <Heart size={18} /> Wishlist
                    </SheetTitle>
                </SheetHeader>
                <div className="flex-1 flex flex-col items-center justify-center gap-3 text-gray-400 px-5">
                    <Heart size={48} strokeWidth={1} />
                    <p className="text-sm">Your wishlist is empty</p>
                </div>
                <div className="border-t px-5 py-4">
                    <SheetClose asChild>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                            <Link to="/products">Browse Products</Link>
                        </Button>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    )
}
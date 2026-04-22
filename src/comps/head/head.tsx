import Headsheet from "./headsheet"
import logotxt from "/logotxt.png"
import { SelectScrollable } from "./selected"
import { Search } from "lucide-react"
import { WishList } from "./wishlist"
import { Cart } from "./cart"


export default function Head() {     
  return (
    <div className="pt-[60px]">
      <div className="justify-between flex gap-4 lg:w-[80%] w-full mx-auto items-center px-6"> 
        <div className="">
            <img src={logotxt} alt="Logo with text" className="w-40 mx-auto" />
        </div>
        <div className="lg:flex items-center border-2 rounded-lg hidden overflow-hidden">
            <input type="search" className="flex-1 px-2 w-30 py-2 outline-none" name="" id="" />
            <SelectScrollable />
            <button className="bg-primary p-2 flex items-center cursor-pointer justify-center">
              <Search className="text-white" />
            </button>
        </div>
        <div className="sheet flex justify-between items-center gap-4">
          <Headsheet />
          <WishList />
          <Cart />

        </div>
      </div>
    </div>
  )
}
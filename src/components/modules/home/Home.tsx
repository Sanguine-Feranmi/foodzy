import Categories from "./categories";
import Hero from "./hero";

export default function Home() {
  return (
    <div className=" w-full mx-auto">
      <Hero/>
      <div className="">
        <Categories/>
      </div>
    </div>
  )
}

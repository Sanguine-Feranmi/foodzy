import { ArrowRight } from 'lucide-react'
import noodles from '/noodles.png'

export default function Hero () {
    return(
        <>
            <div className="w-full relative rounded-lg overflow-hidden">
                <img
                src="/heroBgg.png"
                alt="background"
                className="w-full h-screen object-cover block"/>
                <div className="absolute inset-0 lg:flex-row flex flex-col items-center justify-center lg:justify-between h-full px-8">
                    <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left space-y-4 lg:pl-60 lg:max-w-[40%]">
                        <p className="text-lg capitalize text-gray-400   font-light">
                            super delicious
                        </p>
                        <h1 className="text-4xl md:text-[46px] font-bold text-white drop-shadow-lg uppercase">
                            the best way to stuff your wallet.
                        </h1>
                        <p className="text-lg capitalize text-gray-400 italic  font-light">
                            Today's best deal.
                        </p>
                        <button className="flex items-center gap-2 bg-[#CD7A1D] text-white pl-2 pr-6 py-2 rounded-full shadow-lg font-semibold transition cursor-pointer hover:shadow-xl hover:animate-pulse">   
                            <span className="bg-white rounded-full p-1">
                              <ArrowRight size={18} color="#CD7A1D" />
                            </span>
                            Order Now
                        </button>
                        <div className="absolute bottom-[15%] -right-[20%] hidden  lg:inline-flex items-center justify-center">
                            <div className="relative inline-flex items-center justify-center">
                            <svg
                                className="absolute w-[180px] h-[140px]"
                                viewBox="0 0 240 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M70 35
                                    C35 55 20 105 45 145
                                    C70 185 150 190 190 150
                                    C220 120 220 70 175 40
                                    C140 18 95 20 70 35

                                    C60 42 52 55 50 70
                                    C48 90 55 115 70 130
                                    C95 155 145 150 165 130
                                    C185 110 180 65 140 50
                                    C115 40 90 42 70 55"
                                stroke="white"
                                strokeWidth="9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.9"
                                strokeDasharray="750"
                                strokeDashoffset="340"
                                />
                            </svg>

                            {/* Text */}
                            <div className="flex flex-col items-center leading-none">
                                <p className="text-[55px] font-light text-gray-400">50%</p>
                                <p className="text-[34px] font-semibold text-white tracking-wide">OFF</p>
                            </div>
         </div>               </div>
                    </div>
                    <img src={noodles} alt="Noodles" className="h-full w-auto max-w-[60%] object-contain hidden lg:block" />
                </div>
            </div>
        </>
    )
}
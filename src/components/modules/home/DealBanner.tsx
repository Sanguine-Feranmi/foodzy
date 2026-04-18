import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

type TimeLeft = {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
  expired?: boolean
}

type DealBannerProps = {
  bgImage: string
  discountText: string
  title: string
  description: string
  dealEndTime: string
  buttonText: string
  buttonRoute: string
}

const DealBanner = ({
  bgImage,
  discountText,
  title,
  description,
  dealEndTime,
  buttonText,
  buttonRoute,
}: DealBannerProps) => {
  const navigate = useNavigate()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({})

  useEffect(() => {
    const interval = setInterval(() => {
      const end = new Date(dealEndTime).getTime()
      const now = new Date().getTime()
      const distance = end - now

      if (distance <= 0) {
        clearInterval(interval)
        setTimeLeft({ expired: true })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [dealEndTime])

  const formatTime = (value: number) => String(value).padStart(2, "0")

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
      <div className="relative w-full h-[240px] sm:h-[300px] md:h-[330px]">
        <img src={bgImage} alt="deal banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute top-6 left-6 sm:top-10 sm:left-10 bg-white/95 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-lg max-w-[320px]">
          <p className="text-red-500 text-xs font-bold uppercase tracking-wide">{discountText}</p>
          <h2 className="text-gray-900 text-lg sm:text-xl font-bold mt-2 leading-tight">{title}</h2>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">{description}</p>

          {!timeLeft.expired ? (
            <div className="flex items-center gap-3 mt-4">
              {([
                { unit: "days", label: "Days" },
                { unit: "hours", label: "Hours" },
                { unit: "minutes", label: "Mins" },
                { unit: "seconds", label: "Secs" },
              ] as { unit: keyof TimeLeft; label: string }[]).map(({ unit, label }, i) => (
                <div key={unit} className="flex items-center gap-3">
                  {i > 0 && <span className="text-gray-300 text-xl font-bold">:</span>}
                  <div className="text-center border border-gray-200 rounded-none px-2 py-1 min-w-[40px]">
                    <p className="text-gray-900 font-bold text-lg">{formatTime(timeLeft[unit] as number ?? 0)}</p>
                    <p className="text-gray-400 text-[11px] uppercase">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500 text-sm font-semibold mt-4">Deal Expired!</p>
          )}

          <button
            onClick={() => navigate(buttonRoute)}
            className="mt-5 w-full bg-red-500 text-white py-2.5 rounded-md font-semibold text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition"
          >
            {buttonText}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DealBanner

import type { ReactNode } from "react"

type SimplePageProps = {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function SimplePage({ title, subtitle, children }: SimplePageProps) {
  return (
    <div className="w-full min-h-[60vh] py-12 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-500 mt-2 text-sm">{subtitle}</p>}
          <div className="w-12 h-1 bg-primary rounded-full mt-3" />
        </div>
        {children}
      </div>
    </div>
  )
}

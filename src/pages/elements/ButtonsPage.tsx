import SimplePage from "@/components/ui/common/SimplePage"

export default function ButtonsPage() {
  return (
    <SimplePage title="Buttons" subtitle="UI button styles and variants used across the site.">
      <div className="flex flex-wrap gap-4">
        {[
          { label: "Primary", cls: "bg-primary text-white hover:bg-primary/90" },
          { label: "Secondary", cls: "bg-gray-800 text-white hover:bg-black" },
          { label: "Outline", cls: "border border-primary text-primary hover:bg-primary hover:text-white" },
          { label: "Ghost", cls: "text-gray-700 hover:bg-gray-100" },
          { label: "Danger", cls: "bg-red-500 text-white hover:bg-red-600" },
          { label: "Success", cls: "bg-green-500 text-white hover:bg-green-600" },
        ].map(({ label, cls }) => (
          <button key={label} className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition ${cls}`}>
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        {["sm", "md", "lg"].map((size) => (
          <button
            key={size}
            className={`bg-primary text-white rounded-lg font-semibold transition hover:bg-primary/90 ${size === "sm" ? "px-3 py-1.5 text-xs" : size === "md" ? "px-5 py-2.5 text-sm" : "px-7 py-3.5 text-base"}`}
          >
            Button {size.toUpperCase()}
          </button>
        ))}
      </div>
    </SimplePage>
  )
}

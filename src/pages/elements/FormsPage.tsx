import SimplePage from "@/components/ui/common/SimplePage"

export default function FormsPage() {
  return (
    <SimplePage title="Forms" subtitle="Input fields, selects and form layout examples.">
      <div className="max-w-lg flex flex-col gap-5">
        {[
          { label: "Text Input", type: "text", placeholder: "Enter text..." },
          { label: "Email Input", type: "email", placeholder: "you@example.com" },
          { label: "Password Input", type: "password", placeholder: "••••••••" },
        ].map(({ label, type, placeholder }) => (
          <div key={label}>
            <label className="text-xs font-medium text-gray-600 mb-1 block">{label}</label>
            <input type={type} placeholder={placeholder} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
        ))}

        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Select</label>
          <select className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 mb-1 block">Textarea</label>
          <textarea rows={4} placeholder="Write something..." className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
        </div>

        <button className="w-full bg-primary text-white py-2.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition">
          Submit
        </button>
      </div>
    </SimplePage>
  )
}

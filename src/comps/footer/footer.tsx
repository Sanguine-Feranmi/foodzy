export default function Footer() {
  return (
    <footer className="border-t py-6 mt-auto">
      <div className="lg:w-[80%] mx-auto px-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Food. All rights reserved.
      </div>
    </footer>
  )
}

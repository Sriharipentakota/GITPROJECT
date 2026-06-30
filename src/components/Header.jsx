export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-yellow-400 text-gray-950 font-black text-lg shrink-0 select-none">
          JS
        </div>
        <div className="min-w-0">
          <h1 className="text-base sm:text-lg font-bold text-white leading-tight truncate">
            JavaScript Mastery Roadmap
          </h1>
          <p className="text-xs text-gray-400 hidden sm:block">
            8 Phases · ~100 Topics · 4–6 Months
          </p>
        </div>
      </div>
    </header>
  )
}

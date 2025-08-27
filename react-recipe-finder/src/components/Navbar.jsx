export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-xl bg-green-500" />
          <span className="text-lg font-semibold text-gray-900">Recipe Finder</span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="/favorites" className="text-sm font-medium text-gray-700 hover:text-gray-900">
            Favorites
          </a>
        </div>
      </nav>
    </header>
  );
}

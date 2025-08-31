import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger + close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-black shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="font-bold text-xl">Recipe Finder</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link to="/favorites" className="hover:text-gray-600">
            Favorites
          </Link>
          <Link to="/about" className="hover:text-gray-600">
            About
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-primary px-6 pb-4 space-y-2 font-medium">
          <Link
            to="/"
            className="block hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/favorites"
            className="block hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Favorites
          </Link>
          <Link
            to="/about"
            className="block hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
}

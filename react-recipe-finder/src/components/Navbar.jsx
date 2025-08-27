import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold">
          Recipe Finder
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/favorites" className="hover:text-gray-200">
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}

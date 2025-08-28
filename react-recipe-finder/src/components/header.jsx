import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <img src="https://via.placeholder.com/40" alt="Logo" className="w-10 h-10"/>
          <span className="font-bold text-xl">Recipe Finder</span>
        </div>
        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/favorites" className="hover:text-gray-200">Favorites</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </nav>
      </div>
    </header>
  );
}

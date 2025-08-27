import { useState } from "react";

export default function Hero({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query.trim());
  };

  return (
    <div className="bg-[url('https://via.placeholder.com/1440x400')] bg-cover bg-center rounded-xl p-12 mt-6 text-center text-white">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
        Discover Delicious Recipes
      </h1>
      <p className="text-lg mb-6 drop-shadow-md">
        Search by name, ingredient, or cuisine
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center max-w-xl mx-auto"
      >
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="w-full px-6 py-3 rounded-l-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-xl font-semibold">
          Search
        </button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
          query
        )}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Search error:", err);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">🍲 Recipe Finder</h1>
        <p className="text-gray-600 mt-2">
          Search recipes by name or ingredient (TheMealDB).
        </p>
      </header>

      <SearchBar onSearch={fetchRecipes} />

      {loading ? (
        <p className="text-center mt-8">Loading...</p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
}

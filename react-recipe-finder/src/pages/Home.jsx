import { useState } from "react";
import Hero from "../components/Hero";
import RecipeList from "../components/RecipeList";

export default function Home({ favorites, onToggleFavorite }) {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch {
      setRecipes([]);
    }
  };

  return (
    <div>
      <Hero onSearch={handleSearch} />
      <RecipeList recipes={recipes} favorites={favorites} onToggleFavorite={onToggleFavorite} />
    </div>
  );
}

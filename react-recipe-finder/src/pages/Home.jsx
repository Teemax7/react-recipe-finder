import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function Home({ favorites, onToggleFavorite }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch {
      setRecipes([]);
    } finally { setLoading(false); }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-[url('https://via.placeholder.com/1440x400')] bg-cover bg-center rounded-2xl p-12 text-center text-black shadow-card">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Discover Delicious Recipes</h1>
        <p className="text-lg mb-6 drop-shadow-md">Search by name, ingredient, or cuisine</p>
        <SearchBar onSearch={fetchRecipes} />
      </div>

      {loading ? <p className="text-center mt-8">Loading...</p> :
        <RecipeList recipes={recipes} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      }
    </div>
  );
}

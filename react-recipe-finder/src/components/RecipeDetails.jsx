import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails({ onToggleFavorite }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setRecipe(data.meals ? data.meals[0] : null);
      } catch (err) { console.error(err); }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center mt-10 text-gray-500">Loading recipe...</p>;

  const ingredients = Array.from({ length: 20 }).map((_, i) => {
    const ing = recipe[`strIngredient${i + 1}`];
    const measure = recipe[`strMeasure${i + 1}`];
    return ing ? `${ing} - ${measure}` : null;
  }).filter(Boolean);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-card">
      <img src={recipe.strMealThumb || "https://via.placeholder.com/600x400"} alt={recipe.strMeal} className="w-full rounded-2xl mb-6"/>
      <h1 className="text-3xl font-bold text-primary mb-4">{recipe.strMeal}</h1>
      <button
        onClick={() => onToggleFavorite(recipe)}
        className="mb-6 px-4 py-2 rounded-xl font-medium bg-primary hover:bg-green-600 text-black"
      >
        Add / Remove Favorite
      </button>

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-6">
        {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700 whitespace-pre-line">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Video Tutorial</h2>
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className="text-primary underline">
            Watch on YouTube
          </a>
        </div>
      )}
    </div>
  );
}

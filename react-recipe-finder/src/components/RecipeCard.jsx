import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, onToggleFavorite, isFavorite }) {
  return (
    <div className="bg-white shadow-card rounded-2xl overflow-hidden hover:shadow-cardHover transition transform hover:-translate-y-1">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb || "https://via.placeholder.com/300x200"}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-500 mt-1">{recipe.strArea || "Cuisine"}</p>
        <button
          onClick={() => onToggleFavorite(recipe)}
          className={`mt-4 w-full px-4 py-2 rounded-xl font-medium ${
            isFavorite ? "bg-red-500 hover:bg-red-600 text-white" : "bg-primary hover:bg-green-600 text-white"
          }`}
        >
          {isFavorite ? "Remove Favorite" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}

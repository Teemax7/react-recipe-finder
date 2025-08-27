import React from "react";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Link to={`/recipe/${recipe.idMeal}`}>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-44 object-cover"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link to={`/recipe/${recipe.idMeal}`}>{recipe.strMeal}</Link>
        </h3>
        <p className="text-sm text-gray-500 mt-1">{recipe.strArea || ""}</p>
      </div>
    </div>
  );
}

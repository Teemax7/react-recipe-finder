import React from "react";
import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes) return null;

  if (recipes.length === 0) {
    return <p className="text-center text-gray-500 mt-8">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {recipes.map((r) => (
        <RecipeCard key={r.idMeal} recipe={r} />
      ))}
    </div>
  );
}

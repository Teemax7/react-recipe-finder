import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes, favorites, onToggleFavorite }) {
  if (!recipes.length) return <p className="text-center text-gray-500 mt-6">No recipes found. Try searching!</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {recipes.map(recipe => {
        const isFavorite = favorites.some(f => f.idMeal === recipe.idMeal);
        return (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        );
      })}
    </div>
  );
}

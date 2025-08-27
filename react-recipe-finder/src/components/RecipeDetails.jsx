export default function RecipeDetails({ recipe }) {
  if (!recipe) return null;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full max-w-lg mx-auto rounded-lg mb-6"
      />
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="text-gray-700">{recipe.strInstructions}</p>
    </div>
  );
}

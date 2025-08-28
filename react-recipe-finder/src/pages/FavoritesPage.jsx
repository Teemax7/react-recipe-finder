import RecipeList from "../components/RecipeList";

export default function FavoritesPage({ favorites, onToggleFavorite }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-4">Your Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center mt-6">No favorites yet. Add some recipes!</p>
      ) : (
        <RecipeList recipes={favorites} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import FavoritesPage from "./pages/FavoritesPage";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (recipe) => {
    const exists = favorites.find(f => f.idMeal === recipe.idMeal);
    if (exists) {
      setFavorites(favorites.filter(f => f.idMeal !== recipe.idMeal));
    } else {
      setFavorites([...favorites, recipe]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-6">
        <Routes>
          <Route path="/" element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="/recipe/:id" element={<RecipeDetails onToggleFavorite={toggleFavorite} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

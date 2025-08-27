    import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function extractIngredients(meal) {
  const list = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ing && ing.trim()) {
      list.push(`${measure ? measure.trim() + " " : ""}${ing.trim()}`);
    }
  }
  return list;
}

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    const getMeal = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(
            id
          )}`
        );
        const data = await res.json();
        setMeal(data.meals ? data.meals[0] : null);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getMeal();
  }, [id]);

  if (loading) return <p className="text-center mt-8">Loading recipe...</p>;
  if (!meal) return <p className="text-center mt-8">Recipe not found.</p>;

  const ingredients = extractIngredients(meal);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{meal.strMeal}</h1>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full rounded-lg mb-6"
      />
      <div className="flex gap-6 mb-6">
        <span className="text-sm text-gray-600">Cuisine: {meal.strArea}</span>
        <span className="text-sm text-gray-600">Category: {meal.strCategory}</span>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {ingredients.map((ing, i) => (
            <li key={i} className="text-gray-700">
              {ing}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <p className="text-gray-700 whitespace-pre-line">{meal.strInstructions}</p>
      </section>
    </div>
  );
}

import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const searchRecipes = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search.php?s=${query}`);
  return data.meals || [];
};

export const getRecipeById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
  return data.meals ? data.meals[0] : null;
};

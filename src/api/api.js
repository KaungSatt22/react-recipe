import axios from "axios";
export const getRandompopular = async (type = "") => {
  let req = await axios.get("https://api.spoonacular.com/recipes/random", {
    params: {
      tags: type,
      number: 10,
      apiKey: import.meta.env.VITE_REACT_API_KEY,
    },
  });
  let res = await req.data;
  return res.recipes;
};
export const getSearchFood = async (foodType, food) => {
  let req = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?${foodType}=${food}`,
    {
      params: {
        number: 10,
        apiKey: import.meta.env.VITE_REACT_API_KEY,
      },
    }
  );
  let res = await req.data;
  return res.results;
};

export const getIngredient = async (id) => {
  let req = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information`,
    {
      params: {
        apiKey: import.meta.env.VITE_REACT_API_KEY,
      },
    }
  );
  let res = await req.data;
  return res;
};

export const getWine = async () => {
  let req = await axios.get(
    "https://api.spoonacular.com/food/wine/recommendation",
    {
      params: {
        wine: "merlot",
        number: 21,
        apiKey: import.meta.env.VITE_REACT_API_KEY,
      },
    }
  );
  let res = await req.data;
  return res.recommendedWines;
};

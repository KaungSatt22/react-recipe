import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchFood } from "../api/api";
import ShowItems from "../components/ShowItems";

const Cuisine = () => {
  const [cuisineFood, setCuisionFood] = useState([]);
  const { cuisine } = useParams();
  useEffect(() => {
    const fetch = async () => {
      let res = await getSearchFood("cuisine", cuisine);
      setCuisionFood(res);
    };
    fetch();
  }, [cuisine]);
  return (
    <div className="container mx-auto grid grid-cols-fluid gap-[5rem]">
      {cuisineFood.map((food) => (
        <ShowItems key={food.id} {...food} />
      ))}
    </div>
  );
};

export default Cuisine;

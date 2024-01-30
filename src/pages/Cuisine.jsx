import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchFood } from "../api/api";
import ShowItems from "../components/ShowItems";
import useFetch from "../hook/useFetch";

const Cuisine = () => {
  const { cuisine } = useParams();
  const cuisineFood = useFetch(cuisine, () =>
    getSearchFood("cuisine", cuisine)
  );

  return (
    <div className="container mx-auto grid grid-cols-fluid gap-[5rem]">
      {cuisineFood.map((food) => (
        <ShowItems key={food.id} {...food} />
      ))}
    </div>
  );
};

export default Cuisine;

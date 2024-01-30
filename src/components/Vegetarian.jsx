import { useState, useEffect } from "react";
import { getRandompopular } from "../api/api.js";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import "@splidejs/react-splide/css";
import useFetch from "../hook/useFetch.jsx";

const Vegetarian = () => {
  const vegetarian = useFetch("vegetarian", () =>
    getRandompopular("vegetarian")
  );
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-5 text-center lg:text-left">
        Vegetarian Recipe
      </h2>
      <div className="mb-20">
        <Splide options={{ perPage: 3, drag: "free", gap: "1rem" }}>
          {vegetarian.map((data) => (
            <SplideSlide key={data.id}>
              <Link to={`/recipe/${data.id}`}>
                <div className="rounded-lg ">
                  <img
                    src={data.image}
                    className="rounded-lg  object-cover lg:h-[20rem]"
                  />
                  <p className="bg-slate-50 p-3 rounded-lg lg:h-20 text-center text-lg">
                    {data.title}
                  </p>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Vegetarian;

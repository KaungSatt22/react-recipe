import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIngredient } from "../api/api";

const Recipe = () => {
  const { id } = useParams();
  const [ingredient, setIngredient] = useState({});
  const [active, setActive] = useState("summary");
  useEffect(() => {
    let fetch = async () => {
      let res = await getIngredient(id);
      setIngredient(res);
    };
    fetch();
  }, [id]);
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-4xl font-bold mb-10">
        {ingredient.title}
      </h2>
      <div className="flex flex-col lg:flex-row gap-[5rem]">
        <div>
          <img
            src={ingredient.image}
            alt="food"
            className="h-[25rem] object-cover rounded-lg"
          />
        </div>
        <div>
          <div className="flex items-center justify-center gap-3 lg:block lg:space-x-5">
            <button
              className={`p-2 border-2 text-xl ${
                active === "summary" ? "bg-black text-white" : ""
              }`}
              onClick={() => setActive("summary")}
            >
              Summary
            </button>
            <button
              className={`p-2 border-2 text-xl ${
                active === "instructions" ? "bg-black text-white" : ""
              }`}
              onClick={() => setActive("instructions")}
            >
              Instructions
            </button>
          </div>
          {active === "summary" && (
            <p
              dangerouslySetInnerHTML={{ __html: ingredient.summary }}
              className="mt-10 text-xl max-w-4xl p-5 lg:p-2  text-center lg:text-left"
            ></p>
          )}
          {active === "instructions" && (
            <p
              dangerouslySetInnerHTML={{ __html: ingredient.instructions }}
              className="mt-10 text-xl max-w-4xl p-5  lg:p-2 text-center lg:text-left"
            ></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;

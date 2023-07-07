import React from "react";
import { useEffect } from "react";
import { getWine } from "../api/api";
import { useState } from "react";
import { Link } from "react-router-dom";

const WineProducts = () => {
  const [wineDB, setWineDB] = useState([]);
  useEffect(() => {
    let fetch = async () => {
      let res = await getWine();
      setWineDB(res);
      localStorage.setItem("wine", JSON.stringify(res));
    };
    if (localStorage.getItem("wine")) {
      setWineDB(JSON.parse(localStorage.getItem("wine")));
    } else {
      fetch();
    }
  }, []);

  return (
    <div className="mb-10">
      <h2 className="font-bold text-center  text-4xl mb-5">Wine Products</h2>
      <div className="grid grid-cols-fluid gap-[2rem]">
        {wineDB.map((wine) => (
          <div
            className="border-2  bg-slate-50 rounded-lg relative overflow-hidden"
            key={wine.id}
          >
            <div className="my-5">
              <img src={wine.imageUrl} alt="" className="mx-auto" />
            </div>
            <div>
              <div className="h-[5rem]">
                <h2 className="text-center text-xl">{wine.title}</h2>
              </div>
              <div className="flex justify-between items-center font-thin text-lg p-2">
                <p>Price : ${Number(wine.price.replace("$", "")).toFixed(2)}</p>
                <p>Rating : {wine.ratingCount}</p>
              </div>
            </div>
            <div className="absolute top-10 bg-black w-full h-full opacity-0 hover:-top-0 hover:opacity-100 transition-all duration-700 ">
              {wine.description === "" ? (
                <p className="text-white text-center mt-10 text-lg w-full h-full">
                  No Description Found
                </p>
              ) : (
                <p className="text-center text-lg p-2 text-white ">
                  {wine.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineProducts;

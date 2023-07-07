import React from "react";
import Popular from "../components/Popular";
import Vegetarian from "../components/Vegetarian";
import WineProducts from "../components/WineProducts";

const Home = () => {
  return (
    <div className="container mx-auto ">
      <Popular />
      <Vegetarian />
      <WineProducts />
    </div>
  );
};

export default Home;

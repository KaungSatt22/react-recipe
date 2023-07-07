import React from "react";
import { Link } from "react-router-dom";

const ShowItems = ({ id, title, image }) => {
  return (
    <Link to={`/recipe/${id}`}>
      <div className="flex flex-col items-center">
        <img src={image} alt="food" className="rounded-lg" />
        <p className="mt-5">{title}</p>
      </div>
    </Link>
  );
};

export default ShowItems;

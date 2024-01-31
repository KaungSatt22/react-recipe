import { getRandompopular } from "../api/api.js";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch.jsx";

const Popular = () => {
  const popular = useFetch("popular", getRandompopular);
  return (
    <div className="my-10 overflow-hidden">
      <h2 className="text-3xl font-bold mb-5 text-center lg:text-left">
        Popular Recipe
      </h2>
      <div className="flex gap-2 scroller whitespace-nowrap">
        {popular.map((data) => (
          <Link to={`/recipe/${data.id}`} key={data.id}>
            <div className="rounded-lg  w-[20rem]  ">
              <img src={data.image} className="rounded-lg  " />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popular;

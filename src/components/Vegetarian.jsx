import { getRandompopular } from "../api/api.js";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import useFetch from "../hook/useFetch.jsx";
import VegatarianItem from "./VegatarianItem.jsx";

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
            <VegatarianItem {...data} key={data.id} />
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Vegetarian;

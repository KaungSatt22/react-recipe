import { SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";

const VegatarianItem = ({ id, image, title }) => {
  return (
    <SplideSlide>
      <Link to={`/recipe/${id}`}>
        <div className="rounded-lg ">
          <img src={image} className="rounded-lg  object-cover lg:h-[20rem]" />
          <p className="bg-slate-50 p-3 rounded-lg lg:h-20 text-center text-lg">
            {title}
          </p>
        </div>
      </Link>
    </SplideSlide>
  );
};

export default VegatarianItem;

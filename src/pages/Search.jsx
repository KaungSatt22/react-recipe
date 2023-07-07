import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchFood } from "../api/api";
import ShowItems from "../components/ShowItems";

const Search = () => {
  const [searchItem, setSearchItem] = useState([]);
  const { search } = useParams();
  useEffect(() => {
    const fetch = async () => {
      let res = await getSearchFood("query", search);
      setSearchItem(res);
    };
    fetch();
  }, [search]);
  return (
    <div className="container mx-auto grid grid-cols-fluid gap-[5rem]">
      {searchItem.map((data) => (
        <ShowItems key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Search;

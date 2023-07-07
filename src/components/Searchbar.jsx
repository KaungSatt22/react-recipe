import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  let navgate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navgate(`/search/${search}`);
    setSearch("");
  };
  return (
    <div className="flex items-center justify-center mt-10">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-black px-2 lg:p-2 lg:text-xl rounded-lg bg-slate-50"
          placeholder="Search Food"
        />
        <button className="px-2 lg:p-3 bg-black text-white rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

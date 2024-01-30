import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cuisine from "./pages/Cuisine";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Recipe from "./pages/Recipe";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:cuisine" element={<Cuisine />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

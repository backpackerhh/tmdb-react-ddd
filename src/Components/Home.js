import React from "react";
import { Link } from "react-router-dom";

import { Header } from "./Header";
import { SearchBox } from "./SearchBox";

export const Home = () => {
  return (
    <>
      <Header />
      <SearchBox /> or <Link to="/movies/top_rated">See Top Rated Movies</Link>
    </>
  );
};

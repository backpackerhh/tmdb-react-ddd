import React from "react";
import { Link } from "react-router-dom";

import { SearchBox } from "./SearchBox";

export const Home = () => {
  return (
    <div>
      <SearchBox /> or <Link to="/movies/top_rated">See Top Rated Movies</Link>
    </div>
  );
};

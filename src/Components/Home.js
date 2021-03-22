import React from "react";
import { Link } from "react-router-dom";

import { SearchBox } from "./SearchBox";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div className="home grid">
      <main>
        <div className="content">
          <h1 className="header">
            <Link to="/">TMDb</Link>
          </h1>

          <div className="search-box">
            <SearchBox />
          </div>

          <div className="navigation">
            or visit <Link to="/movies/top_rated">Top Rated Movies</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

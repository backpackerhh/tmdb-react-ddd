import React from "react";
import { Link, NavLink } from "react-router-dom";

import { SearchBox } from "./SearchBox";
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="top-menu">
      <div className="top-menu-container">
        <h1 className="header">
          <Link to="/">TMDb</Link>
        </h1>

        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/movies/top_rated" activeClassName="active">
                Top Rated Movies
              </NavLink>
            </li>
          </ul>

          <div className="search-box">
            <SearchBox />
          </div>
        </nav>
      </div>
    </header>
  );
};

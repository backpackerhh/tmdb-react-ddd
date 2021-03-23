import React from "react";
import { Link } from "react-router-dom";

import { SearchBox } from "./SearchBox";

export const Header = () => {
  return (
    <div>
      <h1>
        <Link to="/">TMDb</Link>
      </h1>

      <SearchBox />
    </div>
  );
};

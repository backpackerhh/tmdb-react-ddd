import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

export const SearchBox = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const searchFieldRef = useRef();

  const performSearch = (event) => {
    if (event.key !== "Enter" && event.type !== "click") return;

    searchFieldRef.current.value = "";

    history.push(`/movies/search?term=${term}`);
  };

  return (
    <div className="search-box-container">
      <input
        type="search"
        placeholder="Search for movies..."
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={performSearch}
        ref={searchFieldRef}
      />

      <button disabled={!term} onClick={performSearch}>
        <img src="/search.svg" alt="Search" />
      </button>
    </div>
  );
};

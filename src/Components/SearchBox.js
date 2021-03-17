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
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={performSearch}
        ref={searchFieldRef}
      />
      <button disabled={!term} onClick={performSearch}>
        Search
      </button>
    </div>
  );
};

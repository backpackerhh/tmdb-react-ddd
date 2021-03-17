import React, { useEffect, useState, useRef } from "react";

import { Domain } from "../Domain";
import { Paginator } from "./Paginator";
import { MovieList } from "./MovieList";
import { SearchBox } from "./SearchBox";
import { useQuery } from "../hooks/useQuery";
import { scrollToRef } from "../utils/scrollToRef";

export const Search = () => {
  const [movies, setMovies] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const headerRef = useRef(null);
  const pageNumber = useQuery("page", 1);
  const term = useQuery("term", "");

  useEffect(() => {
    Domain.get("movies_by_term")
      .execute({ term, pageNumber })
      .then((data) => {
        setMovies(data.movies);
        setPaginationData(data.paginationData);

        scrollToRef(headerRef);
      })
      .catch((e) => console.log(e));
  }, [term, pageNumber]);

  if (!movies) {
    return "Loading movies by term...";
  }

  return (
    <>
      <SearchBox />

      <h2 ref={headerRef}>Results for term: {term}</h2>

      <Paginator paginationData={paginationData} />

      <MovieList movies={movies} pageNumber={paginationData.currentPageNumber} />

      <Paginator paginationData={paginationData} />
    </>
  );
};

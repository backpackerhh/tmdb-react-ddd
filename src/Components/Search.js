import React, { useEffect, useState, useRef } from "react";

import { Domain } from "../Domain";
import { Header } from "./Header";
import { SearchMovieList } from "./SearchMovieList";
import { Paginator } from "./Paginator";
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
      <Header />

      <h2 ref={headerRef}>Results for term: {term}</h2>

      <Paginator paginationData={paginationData} />

      <SearchMovieList movies={movies} />

      <Paginator paginationData={paginationData} />
    </>
  );
};

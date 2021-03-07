import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

import { Domain } from "../Domain";
import { MovieList } from "./MovieList";
import { Paginator } from "./Paginator";
import { scrollToRef } from "../utils/scrollToRef";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const headerRef = useRef(null);
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page") || 1;

  useEffect(() => {
    Domain.get("top_rated_movies")
      .execute({ pageNumber: page })
      .then((data) => {
        const { movies, paginationData: newPaginationData } = data;

        setMovies(movies);
        setPaginationData(newPaginationData);

        scrollToRef(headerRef);
      })
      .catch((e) => console.log(e));
  }, [page]);

  if (!movies) {
    return "Loading...";
  }

  return (
    <div>
      <h1 ref={headerRef}>TMDb Top Rated Movies</h1>
      <Paginator paginationData={paginationData} />
      <MovieList movies={movies} pageNumber={paginationData.currentPageNumber} />
      <Paginator paginationData={paginationData} />
    </div>
  );
};

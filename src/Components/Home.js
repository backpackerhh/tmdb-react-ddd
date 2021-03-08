import React, { useEffect, useState, useRef } from "react";

import { Domain } from "../Domain";
import { MovieList } from "./MovieList";
import { Paginator } from "./Paginator";
import { useQuery } from "../hooks/useQuery";
import { scrollToRef } from "../utils/scrollToRef";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const headerRef = useRef(null);
  const page = useQuery("page", 1);

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

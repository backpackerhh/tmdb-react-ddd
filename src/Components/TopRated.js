import React, { useEffect, useState, useRef } from "react";

import { Domain } from "../Domain";
import { Paginator } from "./Paginator";
import { MovieList } from "./MovieList";
import { useQuery } from "../hooks/useQuery";
import { scrollToRef } from "../utils/scrollToRef";

export const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const headerRef = useRef(null);
  const page = useQuery("page", 1);

  useEffect(() => {
    Domain.get("top_rated_movies")
      .execute({ pageNumber: page })
      .then((data) => {
        setMovies(data.movies);
        setPaginationData(data.paginationData);

        scrollToRef(headerRef);
      })
      .catch((e) => console.log(e));
  }, [page]);

  if (!movies) {
    return "Loading top rated movies...";
  }

  return (
    <>
      <h2 ref={headerRef}>Top Rated Movies</h2>

      <Paginator paginationData={paginationData} />
      <MovieList movies={movies} pageNumber={paginationData.currentPageNumber} />
      <Paginator paginationData={paginationData} />
    </>
  );
};

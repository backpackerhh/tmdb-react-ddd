import React, { useEffect, useState, useRef } from "react";

import { Domain } from "../Domain";
import { Header } from "./Header";
import { MovieList } from "./MovieList";
import { Paginator } from "./Paginator";
import { useQuery } from "../hooks/useQuery";
import { scrollToRef } from "../utils/scrollToRef";

export const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [paginationData, setPaginationData] = useState({});
  const headerRef = useRef(null);
  const pageNumber = useQuery("page", 1);

  useEffect(() => {
    Domain.get("top_rated_movies")
      .execute({ pageNumber })
      .then((data) => {
        setMovies(data.movies);
        setPaginationData(data.paginationData);

        scrollToRef(headerRef);
      })
      .catch((e) => console.log(e));
  }, [pageNumber]);

  if (!movies) {
    return "Loading top rated movies...";
  }

  return (
    <>
      <div ref={headerRef}>
        <Header />
      </div>

      <div className="content">
        <h2>Top Rated Movies</h2>

        <Paginator paginationData={paginationData} />

        <MovieList movies={movies} pageNumber={paginationData.currentPageNumber} />

        <Paginator paginationData={paginationData} />
      </div>
    </>
  );
};

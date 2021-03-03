import React, { useEffect, useState } from "react";

import { Domain } from "../Domain";
import { MovieList } from "./MovieList";
import { Paginator } from "./Paginator";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [paginationData, setPaginationData] = useState({});

  const getPaginatedMovies = (pageNumber = 1) => {
    Domain.get("top_rated_movies")
      .execute({ pageNumber })
      .then((data) => {
        const { movies, paginationData: newPaginationData } = data;

        setMovies(movies);
        setPaginationData(newPaginationData);
      });
  };

  useEffect(() => getPaginatedMovies(), []);

  if (!movies) {
    return "Loading...";
  }

  return (
    <div>
      <h1>TMDb Top Rated Movies</h1>
      <Paginator onChangeAction={getPaginatedMovies} paginationData={paginationData} />
      <MovieList movies={movies} pageNumber={paginationData.currentPageNumber} />
      <Paginator onChangeAction={getPaginatedMovies} paginationData={paginationData} />
    </div>
  );
};

export default App;

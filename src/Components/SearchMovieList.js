import React from "react";

import { Movie } from "./Movie";

export const SearchMovieList = ({ movies }) => {
  return movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
};

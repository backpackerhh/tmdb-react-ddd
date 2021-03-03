import React from "react";

import { Movie } from "./Movie";
import { generatePosition } from "../utils/generatePosition";

export const MovieList = ({ movies, pageNumber }) => {
  return movies.map((movie, idx) => {
    const position = generatePosition(pageNumber, idx + 1);

    return <Movie key={movie.id} movie={movie} position={position} />;
  });
};

import React from "react";
import { Link } from "react-router-dom";

export const Movie = ({ movie, position }) => {
  const { id, title, voteAverage, releaseDate, poster } = movie;
  const { url, alt, height, title: posterTitle } = poster;

  return (
    <div>
      <strong>#{position}</strong>

      <Link to={`/movies/${id}`}>
        <img src={url} alt={alt} height={height} title={posterTitle} />

        <div>
          <h3>{title}</h3>
          <h4>{voteAverage}</h4>
          <h5>{releaseDate}</h5>
        </div>
      </Link>
    </div>
  );
};

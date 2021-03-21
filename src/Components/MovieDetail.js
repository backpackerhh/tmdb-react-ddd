import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Domain } from "../Domain";
import { Header } from "./Header";
import { GoBack } from "./GoBack";

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    Domain.get("movie")
      .execute({ movieId })
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => console.log(e));
  }, [movieId]);

  if (!movie) {
    return "Loading movie...";
  }

  const { title, voteAverage, releaseDate, overview, tagline, runtime, poster } = movie;
  const { url, alt, title: posterTitle } = poster;

  return (
    <>
      <Header />

      <GoBack />

      <div>
        <img src={url} alt={alt} title={posterTitle} />

        <div>
          <h2>{title}</h2>
          <p>
            <strong>{tagline}</strong>
          </p>
          <p>{overview}</p>
          <h4>{releaseDate}</h4>
          <h5>{runtime} min.</h5>
          <h3>{voteAverage}</h3>
        </div>
      </div>
    </>
  );
};

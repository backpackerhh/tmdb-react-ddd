import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Domain } from "../Domain";
import { Header } from "./Header";
import { GoBack } from "./GoBack";
import "../styles/MovieDetail.css";

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

  const {
    title,
    voteAverage,
    voteCount,
    releaseDate,
    overview,
    tagline,
    runtime,
    genres,
    spokenLanguages,
    cast,
    directors,
    writers,
    screenplayers,
    poster,
  } = movie;
  const { detailUrl, alt } = poster;

  return (
    <>
      <Header />

      <div className="content">
        <GoBack />

        <div className="movie-container">
          <div className="movie-info">
            <div className="movie-poster">
              <img src={detailUrl} alt={alt} />
            </div>

            <div className="movie-details">
              <h2>{title}</h2>

              <div className="movie-facts">
                {releaseDate && <strong className="movie-release-date">{releaseDate}</strong>}

                {genres && <strong className="movie-genres">{genres}</strong>}

                {runtime && <strong className="movie-runtime">{runtime} min.</strong>}
              </div>

              {tagline && (
                <div className="movie-tagline">
                  <em>{tagline}</em>
                </div>
              )}

              {overview && (
                <div className="movie-overview">
                  <h3>Overview</h3>

                  {overview}
                </div>
              )}

              {spokenLanguages && (
                <div className="movie-spoken-languages">
                  <h3>Spoken languages</h3>

                  {spokenLanguages}
                </div>
              )}

              <div className="movie-votes">
                <div className="movie-votes-average">
                  <strong>{voteAverage}</strong>
                </div>

                <span className="movie-votes-count">{`${voteCount} votes`}</span>
              </div>
            </div>
          </div>

          <div className="movie-credits">
            <div className="movie-cast">
              <h3>Cast</h3>

              {cast}
            </div>

            <div className="movie-crew">
              <h3>Crew</h3>

              {directors && (
                <div className="movie-directors">
                  <h4>Director</h4>

                  {directors}
                </div>
              )}

              {writers && (
                <div className="movie-writers">
                  <h4>Writer</h4>

                  {writers}
                </div>
              )}

              {screenplayers && (
                <div className="movie-screenplayers">
                  <h4>Screenplay</h4>

                  {screenplayers}
                </div>
              )}
            </div>
          </div>
        </div>

        <GoBack />
      </div>
    </>
  );
};

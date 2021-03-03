import { PosterValueObject } from "../ValueObjects/PosterValueObject";

export class MovieEntity {
  static create({ movie }) {
    return new MovieEntity({ movie });
  }

  constructor({ movie }) {
    const { id, title, poster_path, vote_average, release_date, overview } = movie;

    this._id = id;
    this._title = title;
    this._posterPath = poster_path;
    this._voteAverage = vote_average;
    this._releaseDate = release_date;
    this._overview = overview;
  }

  id() {
    return this._id;
  }

  title() {
    return this._title;
  }

  voteAverage() {
    return this._voteAverage;
  }

  releaseDate() {
    return this._releaseDate;
  }

  poster() {
    const posterVO = PosterValueObject.create({
      posterPath: this._posterPath,
      movieTitle: this._title,
      movieOverview: this._overview,
    });

    return posterVO.toJSON();
  }

  toJSON() {
    return {
      id: this.id(),
      title: this.title(),
      voteAverage: this.voteAverage(),
      releaseDate: this.releaseDate(),
      poster: this.poster(),
    };
  }
}

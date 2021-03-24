import { PosterValueObject } from "../ValueObjects/PosterValueObject";

export class MovieEntity {
  static create({ movie }) {
    return new MovieEntity({ movie });
  }

  constructor({ movie }) {
    const {
      id,
      title,
      poster_path,
      vote_average,
      release_date,
      overview,
      tagline,
      runtime,
    } = movie;

    this._id = id;
    this._title = title;
    this._posterPath = poster_path;
    this._voteAverage = vote_average;
    this._releaseDate = release_date;
    this._overview = overview;
    this._tagline = tagline;
    this._runtime = runtime;
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

  releaseYear() {
    const year = new Date(this._releaseDate).getFullYear();

    return isNaN(year) ? "-" : year;
  }

  overview() {
    return this._overview;
  }

  tagline() {
    return this._tagline;
  }

  runtime() {
    return this._runtime;
  }

  poster() {
    const posterVO = PosterValueObject.create({
      posterPath: this._posterPath,
      movieTitle: this._title,
    });

    return posterVO.toJSON();
  }

  toJSON() {
    return {
      id: this.id(),
      title: this.title(),
      voteAverage: this.voteAverage(),
      releaseDate: this.releaseDate(),
      releaseYear: this.releaseYear(),
      overview: this.overview(),
      tagline: this.tagline(),
      runtime: this.runtime(),
      poster: this.poster(),
    };
  }
}

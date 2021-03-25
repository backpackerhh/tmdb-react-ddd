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
      vote_count,
      release_date,
      overview,
      tagline,
      runtime,
      genres,
      spoken_languages,
      credits,
    } = movie;

    this._id = id;
    this._title = title;
    this._voteAverage = vote_average;
    this._voteCount = vote_count;
    this._releaseDate = release_date;
    this._overview = overview;
    this._tagline = tagline;
    this._runtime = runtime;
    this._genres = genres || [];
    this._spokenLanguages = spoken_languages || [];
    this._cast = credits?.cast || [];
    this._crew = credits?.crew || [];
    this._posterPath = poster_path;
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

  voteCount() {
    return this._voteCount;
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
    return this._tagline || "";
  }

  runtime() {
    return this._runtime || "";
  }

  genres() {
    return this._stringifyCollection(this._genres, "name");
  }

  spokenLanguages() {
    return this._stringifyCollection(this._spokenLanguages, "english_name");
  }

  cast() {
    return this._stringifyCollection(this._cast.slice(0, 5), "original_name");
  }

  directors() {
    return this._stringifyCollection(this._getCrewMembersByJob("Director"), "original_name");
  }

  writers() {
    return this._stringifyCollection(this._getCrewMembersByJob("Writer"), "original_name");
  }

  screenplayers() {
    return this._stringifyCollection(this._getCrewMembersByJob("Screenplay"), "original_name");
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
      voteCount: this.voteCount(),
      releaseDate: this.releaseDate(),
      releaseYear: this.releaseYear(),
      overview: this.overview(),
      tagline: this.tagline(),
      runtime: this.runtime(),
      genres: this.genres(),
      spokenLanguages: this.spokenLanguages(),
      cast: this.cast(),
      directors: this.directors(),
      writers: this.writers(),
      screenplayers: this.screenplayers(),
      poster: this.poster(),
    };
  }

  _stringifyCollection(collection, key) {
    return collection.map((element) => element[key]).join(", ");
  }

  _getCrewMembersByJob(job) {
    return this._crew.filter((c) => c.job === job);
  }
}

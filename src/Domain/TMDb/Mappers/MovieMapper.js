import { MovieEntity } from "../Entities/MovieEntity";

export class MovieMapper {
  static create() {
    return new MovieMapper();
  }

  map({ movies }) {
    return movies.map((movie) => MovieEntity.create({ movie }).toJSON());
  }
}

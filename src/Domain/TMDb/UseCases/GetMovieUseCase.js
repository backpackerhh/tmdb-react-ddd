import { HttpRepository } from "../Repositories/HttpRepository";
import { MovieIdValueObject } from "../ValueObjects/MovieIdValueObject";

export class GetMovieUseCase {
  static create() {
    const repository = HttpRepository.create();

    return new GetMovieUseCase({ repository });
  }

  constructor({ repository }) {
    this._repository = repository;
  }

  async execute({ movieId }) {
    const movieIdVO = MovieIdValueObject.create({ movieId });
    const movieEntity = await this._repository.getMovie({ movieIdVO });

    return movieEntity.toJSON();
  }
}

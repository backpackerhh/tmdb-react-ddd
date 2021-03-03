import { HttpRepository } from "../Repositories/HttpRepository";
import { PageNumberValueObject } from "../ValueObjects/PageNumberValueObject";

export class GetTopRatedMoviesUseCase {
  static create() {
    const repository = HttpRepository.create();

    return new GetTopRatedMoviesUseCase({ repository });
  }

  constructor({ repository }) {
    this._repository = repository;
  }

  async execute({ pageNumber }) {
    const pageNumberVO = PageNumberValueObject.create({ pageNumber });
    const pageVO = await this._repository.getTopRatedMovies({ pageNumberVO });

    return pageVO.toJSON();
  }
}

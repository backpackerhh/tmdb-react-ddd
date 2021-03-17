import { HttpRepository } from "../Repositories/HttpRepository";
import { TermValueObject } from "../ValueObjects/TermValueObject";
import { PageNumberValueObject } from "../ValueObjects/PageNumberValueObject";

export class GetMoviesByTermUseCase {
  static create() {
    const repository = HttpRepository.create();

    return new GetMoviesByTermUseCase({ repository });
  }

  constructor({ repository }) {
    this._repository = repository;
  }

  async execute({ term, pageNumber }) {
    const termVO = TermValueObject.create({ term });
    const pageNumberVO = PageNumberValueObject.create({ pageNumber });
    const pageVO = await this._repository.getMoviesByTerm({ termVO, pageNumberVO });

    return pageVO.toJSON();
  }
}

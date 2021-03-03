import { PageValueObject } from "../ValueObjects/PageValueObject";
import { PaginatorValueObject } from "../ValueObjects/PaginatorValueObject";

export class PageMapper {
  static create({ movieMapper }) {
    return new PageMapper({ movieMapper });
  }

  constructor({ movieMapper }) {
    this._movieMapper = movieMapper;
  }

  map(rawApiResponse) {
    const { results: movies, total_pages: totalPages, page: currentPageNumber } = rawApiResponse;
    const movieListEntity = this._movieMapper.map({ movies });
    const paginationDataVO = PaginatorValueObject.create({ totalPages, currentPageNumber });

    return PageValueObject.create({
      movies: movieListEntity,
      paginationData: paginationDataVO.toJSON(),
    });
  }
}

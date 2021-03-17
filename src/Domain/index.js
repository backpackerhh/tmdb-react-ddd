import { GetTopRatedMoviesUseCase } from "../Domain/TMDb/UseCases/GetTopRatedMoviesUseCase";
import { GetMovieUseCase } from "../Domain/TMDb/UseCases/GetMovieUseCase";
import { GetMoviesByTermUseCase } from "../Domain/TMDb/UseCases/GetMoviesByTermUseCase";

const useCases = {
  get_top_rated_movies: GetTopRatedMoviesUseCase.create(),
  get_movie: GetMovieUseCase.create(),
  get_movies_by_term: GetMoviesByTermUseCase.create(),
};

export const Domain = {
  get: (key) => useCases[`get_${key}`],
};

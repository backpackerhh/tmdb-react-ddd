import { GetTopRatedMoviesUseCase } from "../Domain/TMDb/UseCases/GetTopRatedMoviesUseCase";
import { GetMovieUseCase } from "../Domain/TMDb/UseCases/GetMovieUseCase";

const useCases = {
  get_top_rated_movies: GetTopRatedMoviesUseCase.create(),
  get_movie: GetMovieUseCase.create(),
};

export const Domain = {
  get: (key) => useCases[`get_${key}`],
};

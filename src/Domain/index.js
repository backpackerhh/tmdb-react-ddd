import { GetTopRatedMoviesUseCase } from "../Domain/TMDb/UseCases/GetTopRatedMoviesUseCase";

const useCases = {
  get_top_rated_movies: GetTopRatedMoviesUseCase.create(),
};

export const Domain = {
  get: (key) => useCases[`get_${key}`],
};

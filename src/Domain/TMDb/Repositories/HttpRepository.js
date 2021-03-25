import axios from "axios";

import { config } from "../../config";
import { PageMapper } from "../Mappers/PageMapper";
import { MovieMapper } from "../Mappers/MovieMapper";
import { MovieEntity } from "../Entities/MovieEntity";

const { TMDB_API_URL, TMDB_API_KEY } = config;

export class HttpRepository {
  static create() {
    return new HttpRepository();
  }

  getTopRatedMovies({ pageNumberVO }) {
    const url = `${TMDB_API_URL}movie/top_rated`;
    const params = { page: pageNumberVO.value() };

    return this._fetchMovies({ url, params });
  }

  getMoviesByTerm({ termVO, pageNumberVO }) {
    const url = `${TMDB_API_URL}search/movie`;
    const params = {
      query: termVO.value(),
      page: pageNumberVO.value(),
    };

    return this._fetchMovies({ url, params });
  }

  async getMovie({ movieIdVO }) {
    const url = `${TMDB_API_URL}movie/${movieIdVO.value()}`;
    const defaultParams = this._defaultParams();
    const params = { append_to_response: "credits" };

    try {
      const response = await axios.get(url, { params: { ...defaultParams, ...params } });
      const movieEntity = MovieEntity.create({ movie: response.data });

      return movieEntity;
    } catch (e) {
      console.log(e);
    }
  }

  async _fetchMovies({ url, params }) {
    const defaultParams = this._defaultParams();
    const movieMapper = MovieMapper.create();
    const pageMapper = PageMapper.create({ movieMapper });

    try {
      const response = await axios.get(url, { params: { ...defaultParams, ...params } });
      const pageVO = pageMapper.map(response.data);

      return pageVO;
    } catch (e) {
      console.log(e);
    }
  }

  _defaultParams() {
    return { api_key: TMDB_API_KEY };
  }
}

import axios from "axios";

import { config } from "../../config";
import { PageMapper } from "../Mappers/PageMapper";
import { MovieMapper } from "../Mappers/MovieMapper";

export class HttpRepository {
  static create() {
    return new HttpRepository();
  }

  async getTopRatedMovies({ pageNumberVO }) {
    const { TMDB_API_URL, TMDB_API_KEY } = config;
    const url = `${TMDB_API_URL}movie/top_rated`;
    const params = { api_key: TMDB_API_KEY, page: pageNumberVO.value() };
    const movieMapper = MovieMapper.create();
    const pageMapper = PageMapper.create({ movieMapper });

    try {
      const response = await axios.get(url, { params });
      const pageVO = pageMapper.map(response.data);

      return pageVO;
    } catch (e) {
      console.log(e);
    }
  }
}
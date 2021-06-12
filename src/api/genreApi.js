import axiosClient from "./axiosClient";

class GenreApi {
  getAll = (params) => {
    const url = "/genres";
    return axiosClient.get(url, { params });
  };
  getMovieByGenre = (params) => {
    const url = `/genres/${params}`;
    return axiosClient.get(url);
  };
}

const genreApi = new GenreApi();
export default genreApi;

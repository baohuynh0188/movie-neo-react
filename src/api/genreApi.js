import axiosClient from "./axiosClient";

class GenreApi {
  getAll = (params) => {
    const url = "/genres";
    return axiosClient.get(url, { params });
  };
}

const genreApi = new GenreApi();
export default genreApi;

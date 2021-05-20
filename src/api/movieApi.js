import axiosClient from "./axiosClient";

class MovieApi {
  getAll = (params) => {
    const url = "/movies";
    return axiosClient.get(url, { params });
  };
  getbySlug = (slug) => {
    const url = `/movies/${slug}`;
    return axiosClient.get(url);
  };
}

const movieApi = new MovieApi();
export default movieApi;

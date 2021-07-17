import axiosClient from "./axiosClient";

class MovieApi {
  getAll = (params) => {
    const url = "/movies";
    return axiosClient.get(url, { params });
  };
  getBySlug = (slug) => {
    const url = `/movies/${slug}`;
    return axiosClient.get(url);
  };
  getByContent = (params) => {
    const url = "/rec_engine/content";
    return axiosClient.post(url, params);
  };
  getByUser = (params) => {
    const url = "/rec_engine/collab";
    return axiosClient.post(url, params);
  };
  searchByName = (search) => {
    const url = `/movies/search${search}`;
    return axiosClient.get(url);
  };
}

const movieApi = new MovieApi();
export default movieApi;

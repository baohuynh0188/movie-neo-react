import axiosClient from "./axiosClient";

class RatingApi {
  getRating = (slug) => {
    const url = `/rating/${slug}`;
    return axiosClient.get(url);
  };
  postRating = (params) => {
    const url = `/rating`;
    return axiosClient.post(url, params);
  };
}

const ratingApi = new RatingApi();
export default ratingApi;

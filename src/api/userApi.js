import axiosClient from "./axiosClient";

class UserApi {
  login = (params) => {
    const url = "/login";
    return axiosClient.post(url, params);
  };
  register = (params) => {
    const url = "/register";
    return axiosClient.post(url, params);
  };
}
const userApi = new UserApi();
export default userApi;
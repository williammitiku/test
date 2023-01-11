import axios from "axios";

const http = axios.create({
  baseURL: "",
  Headers: {},
});
export const baseUrl = "https://elitewater-admin.com:4001";
try {
  http.interceptors.request.use(
    (config) => {
      let data = JSON.parse(localStorage.getItem("elite-water"));

      if (data && data?.user_status?.token) {
        config.headers["Authorization"] = "Bearer " + data?.user_status?.token;
      }
      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default http;

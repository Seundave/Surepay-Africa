import axios from "axios";

const axiosInstance = axios.create({
//   baseURL: "https://api.teesbridal.com",
  baseURL: "http://localhost:5000",
});

export default axiosInstance;

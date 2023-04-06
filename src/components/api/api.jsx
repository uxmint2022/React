import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 2500,
  headers: { "X-Custom-Header": "foobar" },
});

api.interceptors.request.use(
  (config) => {
    document.getElementById("overlay").style.display = "block";
    // console.log('req');
    return config;
  },
   (error)=> {
    // console.log(error.message);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    document.getElementById("overlay").style.display = "none";
    // console.log('res');
    return response;
  },
  (error) => {
    // console.log(error.message);
    document.getElementById("overlay").style.display = "none";
    return Promise.reject(error);
  }
);

export default api;

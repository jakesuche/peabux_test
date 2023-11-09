import axios from "axios";

export const http = axios.create({
  baseURL: '/api/',
});

http.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {

    const data = error?.response?.data ?? {};
 
    data.message = error.response.data.message;

    (error.response ?? {}).data = data;

    return Promise.reject(error);
  }
);



export default http;

import axios, { type AxiosRequestHeaders } from "axios";
import { message } from "ant-design-vue";
import { getToken } from "./storge.local";
const request = axios.create({
  baseURL: "",
});
request.interceptors.request.use(
  (config) => {
    if (getToken()) {
      config.headers = {
        "auth-token": getToken(),
      } as AxiosRequestHeaders | any;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
request.interceptors.response.use(
  ({ data }) => {
    // if (data.code !== 200)
    //   return message.error(data.message || "服务器挂掉啦!");
    return data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default request;

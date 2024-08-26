import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export const BoardUrl = {
  getList: "/list",
  getDetail: "/detail",
};

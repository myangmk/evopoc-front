import axios from "axios";

export const backendApi = axios.create({
  baseURL: "http://localhost:8080", // if profile needed, change like: process.env.REACT_APP_BACKEND_BASEURL
  responseType: "json",
  withCredentials: true,
});


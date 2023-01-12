import axios from "axios";
const API_URL = "http://localhost:1337/api";

export const instance = axios.create({
  baseURL: API_URL,
});

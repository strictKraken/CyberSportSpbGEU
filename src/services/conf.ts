import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

export const instance = axios.create({
  baseURL: API_URL,
});

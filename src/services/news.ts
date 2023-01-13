import { instance } from "./conf";

export const NewsServices = {
  async getLastNews() {
    return instance.get(
      "/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3&pagination[withCount]=true",
    );
  },
  async getNews() {
    return instance.get(
      "/articles?sort=createdAt:DES&pagination[page]=1$pagination[pageSize]=8pagination[withCount]=true?",
    );
  },
  async getIvents() {},
};

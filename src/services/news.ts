import { instance } from "./conf";

export const NewsServices = {
  async getLastNews() {
    return instance.get(
      "/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3&pagination[withCount]=true&filters[type_post][$eq]=article&populate=preview_img",
    );
  },
  async getNews() {
    return instance.get(
      "/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=8&pagination[withCount]=true&filters[type_post][$eq]=article&populate=preview_img",
    );
  },
  async getEvents() {
    return instance.get(
      "/articles?sort=createdAt:DESC&pagination[page]=1&pagination[pageSize]=3&pagination[withCount]=true&filters[type_post][$eq]=event&populate=preview_img",
    );
  },
};

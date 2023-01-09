import { instance } from "./conf";

export const TeamServices = {
  async getAll(slug: string) {
    return instance.get(`/teams?populate=members&filters[game][$eq]=${slug}`);
  },
};

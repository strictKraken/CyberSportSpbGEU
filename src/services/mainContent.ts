import { instance } from "./conf";

export const MainContentServices = {
  async getSliderData() {
    return instance.get(`/main-slides?populate=ContentImage`);
  },
};

import { instance } from "./conf";

export const AchievementServices = {
  /**
   * Get all achievemnts for page
   */
  async getAchievements(currentPage: number, pageSize: number) {
    return instance.get(
      `/achievements?sort=date:DESC&pagination[page]=${currentPage}&pagination[pageSize]=${pageSize}&pagination[withCount]=true`,
    );
  },
  /**
   * get detail acgievemet
   * @returns
   */
  async getAchievement() {
    return instance.get("");
  },
};

import { SlideData, ShortNewsCard } from "../../types/globalTypes";

import testImageNews from "/public/images/1.png";
import slideImg from "../../assets/testData/caruselExmpl.png";

export const SlidesData: SlideData[] = [
  {
    id: "1",
    title: "Становись частью команды",
    subTitle: "Вступай в новую команду киберспорта и развивайся в любимом деле",
    img: slideImg,
  },
  {
    id: "2",
    title: "Становись частью команды",
    subTitle: "Вступай в новую команду киберспорта и развивайся в любимом деле",
    img: slideImg,
  },
  {
    id: "3",
    title: "Становись частью команды",
    subTitle: "Вступай в новую команду киберспорта и развивайся в любимом деле",
    img: slideImg,
  },
];

export const getLastNews: ShortNewsCard[] = [
  {
    id: "1",
    title: "Ребрендинг",
    date: "Сентябрь 2022",
    img: testImageNews,
  },
  {
    id: "2",
    title: "набор игроков",
    date: "Октябрь 2022",
    img: "",
  },
  {
    id: "3",
    title: "новый стаф",
    date: "Октябрь 2022",
    img: testImageNews,
  },
];

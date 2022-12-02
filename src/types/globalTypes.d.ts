import { StaticImageData } from "next/image";

export type navLink = {
  name: string;
  path: string;
};

export type SlideData = {
  id: string;
  title: string;
  subTitle: string;
  img: string | StaticImageData;
};

export type ShortNewsCard = {
  id: string;
  title: string;
  date: string | Date;
  img: string | StaticImageData;
};

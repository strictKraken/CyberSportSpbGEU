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
  date?: string;
  img: string | StaticImageData;
};

export type linkSocialT = {
  name: string;
  url: string;
};

export interface CardSocialT {
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  url?: linkSocialT;
}

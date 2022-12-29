import miniDota from "/public/images/list-games/dota.png";
import miniCS from "/public/images/list-games/cs.png";
import miniHS from "/public/images/list-games/hearth-stone.png";
import miniSC from "/public/images/list-games/star-craft.png";
import { StaticImageData } from "next/image";
import { linkSocialT } from "../types/globalTypes";

export type GameImage = {
  id: string;
  name: string;
  src: StaticImageData | string;
};

export const imagesGames: GameImage[] = [
  {
    id: "1",
    name: "dota",
    src: miniDota,
  },
  {
    id: "2",
    name: "cs",
    src: miniCS,
  },
  {
    id: "3",
    name: "hs",
    src: miniHS,
  },
  {
    id: "4",
    name: "sc",
    src: miniSC,
  },
];

export const linkSocial: linkSocialT[] = [
  {
    name: "vk",
    url: "https://vk.com/uneconcybersport",
  },
  {
    name: "telegram",
    url: "",
  },
  {
    name: "discord",
    url: "https://discord.gg/GNWpnaKv",
  },
  {
    name: "twitch",
    url: "https://www.twitch.tv/wild_griffins",
  },
];

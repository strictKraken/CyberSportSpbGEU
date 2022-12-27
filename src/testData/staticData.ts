import miniDota from "/public/images/list-games/dota.png";
import miniCS from "/public/images/list-games/cs.png";
import miniHS from "/public/images/list-games/hearth-stone.png";
import miniSC from "/public/images/list-games/star-craft.png";
import { StaticImageData } from "next/image";

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

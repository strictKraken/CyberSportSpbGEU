import Image from "next/image";
import SkeletBlockImage from "./skeletBlockImage";

export interface ICardNews {
  title: string;
  subTitle?: string;
  imageUrl?: any;
}

const CardNews: React.FC<ICardNews> = ({ title, subTitle, imageUrl }) => {
  return (
    // max-w-[312px] h-[426px]
    <div
      className="relative cursor-pointer  flex flex-col justify-end 
      md:h-[426px]
    "
    >
      <div className="absolute w-full z-10 h-full hover:bg-bgDark transition-all ease-linear"></div>
      {Boolean(imageUrl) ? (
        <Image
          src={imageUrl}
          alt="cool-bg-news"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <SkeletBlockImage className="absolute w-full h-full left-0 top-0" />
      )}
      <div className="relative px-[16px] py-[24px] bg-gradient-to-t from-[#1C1C1E]">
        <div className="font-batman text-[24px]"> {title} </div>
        <div className="text-[#B1B1BB]"> {subTitle} </div>
      </div>
    </div>
  );
};

export default CardNews;

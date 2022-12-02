import Image from "next/image";

export interface ICardNews {
  title: string;
  subTitle?: string;
  imageUrl?: any;
}

const CardNews: React.FC<ICardNews> = ({ title, subTitle, imageUrl }) => {
  return (
    <div className="relative cursor-pointer max-w-[312px] h-[426px] flex flex-col justify-end ">
      <div className="absolute w-full z-10 h-full hover:bg-bgDark transition-all ease-linear"></div>
      <Image src={imageUrl} alt="cool-bg-news" layout="fill" />
      <div className="relative px-[16px] py-[24px] bg-gradient-to-t from-[#1C1C1E]">
        <div className="font-batman text-[24px]"> {title} </div>
        <div className="text-[#B1B1BB]"> {subTitle} </div>
      </div>
    </div>
  );
};

export default CardNews;

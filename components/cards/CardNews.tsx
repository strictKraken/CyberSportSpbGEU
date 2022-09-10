import Image from "next/image";
import demo from "../../public/images/1.png";

interface ICardNews {
  title: string;
  subTitle?: string;
  imageUrl?: string;
}

const CardNews: React.FC<ICardNews> = ({ title, subTitle, imageUrl }) => {
  return (
    <div className="relative cursor-pointer w-[312px] h-[426px] flex flex-col justify-end bg-gradient-to-b from-[rgba(28,28,30,1)] to-[rgba(28,28,30,0.1)]">
      <Image src={demo} alt="bg-content" layout="fill" />
      <div className="relative px-[16px] py-[24px]">
        <div className="font-batman text-[24px]"> title </div>
        <div className="text-[#B1B1BB]"> subTitle </div>
      </div>
    </div>
  );
};

export default CardNews;

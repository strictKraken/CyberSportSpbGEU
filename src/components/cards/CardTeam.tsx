import Image from "next/image";
import { useRouter } from "next/router";
export interface ICartTeam {
  imgUrl: any;
  nameImgUrl: any;
  url?: string;
  name: string;
}

const CardTeam: React.FC<ICartTeam> = ({
  imgUrl,
  nameImgUrl,
  url = "",
  name,
}) => {
  const route = useRouter();

  const onClickCard = () => {
    console.log("to ", url, name);
    route.push(url);
  };

  return (
    <>
      <div
        className="bg-[#333336] rounded-[8px] relative h-[60px]   
        lg:h-[246px]
        flex
        "
        onClick={() => onClickCard()}
      >
        <div className="relative basis-2/3 hidden lg:block">
          <Image src={imgUrl} alt="team image" layout="fill"></Image>
        </div>
        <div
          className="relative h-full basis-full
          lg:mr-[46px] lg:basisc-1/3 "
        >
          <Image src={nameImgUrl} alt="game name" layout="fill"></Image>
        </div>
      </div>
    </>
  );
};

export default CardTeam;

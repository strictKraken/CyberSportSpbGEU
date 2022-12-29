import Image from "next/image";
export interface ICartTeam {
  imgUrl: any;
  nameImgUrl: any;
}

const CardTeam: React.FC<ICartTeam> = ({ imgUrl, nameImgUrl }) => {
  return (
    <>
      <div className="bg-[#333336] rounded-[8px]">
        <div>
          <Image src={imgUrl} alt="team image"></Image>
        </div>
        <div>
          <Image src={nameImgUrl} alt="game name"></Image>
        </div>
      </div>
    </>
  );
};

export default CardTeam;

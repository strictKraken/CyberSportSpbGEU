import Image from "next/image";
import { TeamMember } from "../../types/globalTypes";

const CardMemberTeam: React.FC<TeamMember> = ({ id, name, img, status }) => {
  const onClickCard = (id: string) => {
    console.log("member: ", id);
  };

  return (
    <div onClick={() => onClickCard(id)} className="relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {img ? <Image src={img} alt="" objectFit="cover"></Image> : <></>}
      </div>
      <div className="flex flex-col h-full justify-end">
        <span className="block text-[20px] font-heading text-white text-center">
          {name}
        </span>
        <span className="block text-center text-[15px]">{status}</span>
      </div>
    </div>
  );
};

export default CardMemberTeam;

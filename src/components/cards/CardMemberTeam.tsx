import Image from "next/image";
import { TeamMember } from "../../types/globalTypes";
import SkeletBlockImage from "./skeletBlockImage";

interface Props extends TeamMember {
  className?: string;
}

const CardMemberTeam: React.FC<Props> = ({
  id,
  name,
  img,
  status,
  className = "",
}) => {
  const onClickCard = (id: string) => {
    // console.log("member: ", id);
  };

  return (
    <div
      onClick={() => onClickCard(id)}
      className={`relative bg-dark-gray rounded-[8px] overflow-hidden p-4 min-h-[200px] 
      md:px-[34px] md:py-[36px] md:min-h-[495px]
      ${className}
      `}
    >
      <div className="absolute top-0 left-0 w-full z-10 h-full transition-all ease-linear hover:bg-bgDark" />
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {img ? (
          <Image src={img} alt="" objectFit="cover"></Image>
        ) : (
          <SkeletBlockImage className="" />
        )}
      </div>
      <div className="flex flex-col h-full justify-end">
        <h4
          className="text-[15px] md:text-[20px] font-heading text-white text-center mb-2 
          md:mb-4
          "
        >
          {name}
        </h4>
        <span
          className="block text-center text-[12px]
          md:text-[15px]"
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default CardMemberTeam;

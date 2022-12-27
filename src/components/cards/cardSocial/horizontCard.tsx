import { CardSocialT } from "../../../types/globalTypes";

const HorizontCard: React.FC<CardSocialT> = ({ className, title, icon }) => {
  return (
    <div
      className={`${className} bg-[#333336] rounded-[10px] p-1 group flex justify-center h-full
      md:py-[40px] md:pr-[86px] 
      lg:pr-[86px] lg:pl-[32px] 
  `}
    >
      <div
        className="hidden text-[24px] font-heading w-[258px]
        md:block
        
        "
      >
        {title}
      </div>
      <div
        className="h-[105px] [&>svg]:w-[95px] [&>svg]:h-[95px] 
        md:ml-auto md:self-center
      "
      >
        {icon}
      </div>
    </div>
  );
};

export default HorizontCard;

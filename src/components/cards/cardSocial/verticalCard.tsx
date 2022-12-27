import { CardSocialT } from "../../../types/globalTypes";

const VerticalCard: React.FC<CardSocialT> = ({ title, icon, className }) => {
  return (
    <div
      className=" bg-[#333336] rounded-[10px] p-1 group flex flex-col h-full justify-center items-center
    
      md:pt-[40px] md:px-[26px] md:h-[400px]
      lg:h-[512px] lg:pb-[62px]
    "
    >
      <div
        className="hidden text-[16px] font-heading
        lg:block
        xl:text-[24px]
        "
      >
        {title}
      </div>
      <div
        className="h-[105px] [&>svg]:w-[95px] [&>svg]:h-[95px]  
        md:mt-auto
      "
      >
        {icon}
      </div>
    </div>
  );
};

export default VerticalCard;

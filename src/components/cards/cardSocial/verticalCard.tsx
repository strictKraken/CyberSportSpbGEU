import { useRouter } from "next/router";
import { CardSocialT } from "../../../types/globalTypes";

const VerticalCard: React.FC<CardSocialT> = ({
  title,
  icon,
  className,
  url = "",
}) => {
  const router = useRouter();

  const redirect = (url: string) => {
    if (!url || url === "") return;
    window.open(url, "_blank");
  };
  return (
    <div
      onClick={() => redirect(url)}
      className=" bg-dark-gray rounded-[10px] p-5 group flex flex-col h-full justify-center items-center group cursor-pointer
      px-5
      md:pt-[40px] md:px-[26px] 
      lg:h-[512px] lg:pb-[62px] 
    "
    >
      <div
        className="hidden text-[16px] font-heading group-hover:text-purpule
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

import { CardSocialT } from "../../../types/globalTypes";

const HorizontCard: React.FC<CardSocialT> = ({
  className,
  title,
  icon,
  url = "",
}) => {
  const redirect = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        onClick={() => redirect(url)}
        className={`${className} bg-dark-gray rounded-[10px] p-5 group flex justify-center h-full group cursor-pointer
      md:py-[40px] md:pr-[] 
      lg:pr-[86px] lg:pl-[32px] 
  `}
      >
        <div
          className="hidden text-[16px] font-heading w-[258px] group-hover:text-purpule
        md:block
        xl:text-[24px]
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
    </a>
  );
};

export default HorizontCard;

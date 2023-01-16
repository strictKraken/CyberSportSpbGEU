import Image from "next/image";
import { useRouter } from "next/router";
export interface ICartTeam {
  imgUrl: any;
  nameImgUrl: any;
  url?: string;
  name: string;
  widthImage: string;
  hieghtImage: string;
  widthLogo?: string;
  hieghtLogo?: string;
}

const CardTeam: React.FC<ICartTeam> = ({
  imgUrl,
  nameImgUrl,
  url = "",
  name,
  widthImage,
  hieghtImage,
  widthLogo,
  hieghtLogo,
}) => {
  const route = useRouter();

  const onClickCard = () => {
    console.log("to ", url, name);
    route.push(url);
  };

  return (
    <>
      <div
        className="bg-dark-gray rounded-[8px] relative h-[60px] cursor-pointer overflow-hidden
        lg:h-[246px]
        group
        "
        onClick={() => onClickCard()}
      >
        <div className="bg-transparent opacity-100 transition-opacity 100s group-hover:bg-dark-gray group-hover:opacity-50 relative w-full h-full">
          <div
            className="absolute top-0 left-0 w-full h-full hidden 
          lg:block

          transition-transform 100s ease-in-out group-hover:scale-110
          "
          >
            <Image
              src={imgUrl}
              alt="team image"
              layout="fixed"
              width={widthImage}
              height={hieghtImage}
            ></Image>
          </div>

          <div
            className="flex items-center justify-center h-full  py-2
            lg:w-[289px] lg:ml-auto
            lg:mr-[46px]"
          >
            <div
              className="relative h-full w-full 
              md:max-h-[92px] md:max-w-[289px]
              "
            >
              <Image
                className=""
                src={nameImgUrl}
                alt="game name"
                layout="fill"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTeam;

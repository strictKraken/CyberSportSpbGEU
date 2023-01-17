import Image from "next/image";
import Link from "next/link";

interface ICardAchievement {
  id: string;
  title?: string;
  place: number;
  game?: string;
}

const getIconOfPlace = (place: number) => {
  if (place === 1)
    return (
      <Image
        src={"/images/achievements/iconsOfPlace/firstPlace.png"}
        width={20}
        height={28}
        alt=""
      />
    );
  if (place === 2)
    return (
      <Image
        src={"/images/achievements/iconsOfPlace/secondPlace.png"}
        width={28}
        height={28}
        alt=""
      />
    );
  if (place === 3)
    return (
      <Image
        src={"/images/achievements/iconsOfPlace/thirdPlace.png"}
        width={28}
        height={28}
        alt=""
      />
    );
  return (
    <Image
      src={"/images/achievements/iconsOfPlace/unPlace.png"}
      width={28}
      height={28}
      alt=""
      layout="fixed"
    />
  );
};

const CardAchievement: React.FC<ICardAchievement> = ({
  id,
  title,
  place,
  game,
}) => {
  return (
    <Link href={`/achievements/${id}`}>
      <a>
        <div className="bg-dark-gray rounded-[8px] group overflow-hidden h-full">
          {/* <div className="bg-transparent opacity-100 transition-opacity 100s group-hover:bg-hoverDark group-hover:opacity-50 relative w-full h-full"> */}
          <div
            className="p-2 md:py-[38px] md:px-[44px] 
              flex flex-col gap-10 md:gap-0 md:flex-row md:items-center"
          >
            {/* place */}
            <div>
              <div
                className=" items-center gap-[12px] mb-2
                flex flex-wrap"
              >
                {getIconOfPlace(place)}
                <span className="font-heading ">{place} МЕСТО</span>
              </div>
              {/* title */}
              <div>{title}</div>
            </div>
            <div className="font-heading md:ml-auto">{game}</div>
          </div>
        </div>
        {/* </div> */}
      </a>
    </Link>
  );
};

export default CardAchievement;

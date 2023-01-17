import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getIconOfPlace } from "../../components/cards/CardAchievement";
import useParseMarkDown from "../../hooks/useParseMarkDown";

import { AchievementServices } from "../../services/achievements.";

// change type
type ContentT = {
  place?: number;
  game: string;
  title: string;
  date?: string;
  content?: any;
  files: any[];
};

const ConvertDateToSeason = (date: string | undefined) => {
  if (!date) return "";
  const result = new Date(date);
  // console.log("result date = ", result.getFullYear(), result.getMonth());
};

const Content: React.FC<ContentT> = ({ place, game, date, content, files }) => {
  ConvertDateToSeason(date);
  return (
    <section
      className="container-base flex flex-col py-[60px] 
      md:flex-row md:justify-between"
    >
      <div
        className="order-2
        md:order-1 md:basis-1/2"
      >
        <div className="mb-[30px] md:mb-[60px] flex flex-wrap items-center justify-between md:justify-start md:gap-10">
          <h2 className="section-title ">{game}</h2>
          <span className="font-heading ">{date}</span>
        </div>
        {/* contentHtml */}
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="[&>p>a]:text-purpule [&>p>a]:underline leading-[2em]"
        />
      </div>
      <div className="mb-10 md:mb-0 md:basis-1/2 order-1 grid grid-cols-2">
        <div className="bg-dark-gray h-[150px] md:h-[200px] lg:h-[312px] relative [&>span]:align-bottom">
          {Boolean(files && files[1]) && (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${files[1].attributes.url}`}
              layout="fill"
              alt=""
            />
          )}
        </div>

        <div className="bg-purpule relative [&>span]:align-bottom">
          {Boolean(files && files[0]) && (
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}${files[0].attributes.url}`}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          )}
        </div>

        <div className="flex gap-2 items-center w-full h-full justify-center ">
          {getIconOfPlace(place)}
          <span className="font-heading text-[24px]">{place} Место</span>
        </div>
        <div className="bg-purpule h-[150px] md:h-[200px] lg:h-[312px]"></div>
      </div>
    </section>
  );
};

const AchievementsDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: response, isLoading } = useQuery(
    ["achievement", id],
    () => AchievementServices.getAchievement(id),
    {
      select: ({ data }: any) => {
        return {
          id: data.data.id,
          ...data.data.attributes,
          files: data.data.attributes.contentImg.data,
        };
      },
    },
  );

  const { contentHtml } = useParseMarkDown(response?.description);

  return (
    <>
      {Boolean(isLoading) ? (
        <></>
      ) : (
        <div className="min-h-screen">
          <Content
            game={"Dota 2"}
            date={response.date}
            title={"Title"}
            content={contentHtml}
            place={response.place}
            files={response.files}
          />
        </div>
      )}
    </>
  );
};

export default AchievementsDetail;

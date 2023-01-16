import type { NextPage } from "next";
import { useQuery } from "react-query";
import CardAchievement from "../../components/cards/CardAchievement";
import { AchievementServices } from "../../services/achievements.";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="font-heading text-3xl">Comming soon...</h1>
  </section>
);

const Content = ({ data }: any) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      {data.map((item: any) => (
        <CardAchievement
          key={item.id}
          id={item.id}
          place={item.place}
          title={item.title}
          game={item.game}
        />
      ))}
    </div>
  );
};

const Achievements: NextPage = () => {
  const { data: response, isFetched } = useQuery(
    ["achievemnts"],
    () => AchievementServices.getAchievements(1, 4),
    {
      select: ({ data }) =>
        data.data?.map((item: any) => {
          return {
            id: item.id,
            ...item.attributes,
          };
        }),
    },
  );

  if (!isFetched) return <></>;
  console.log("achievements: ", response);

  return (
    <>
      <div className="min-h-screen bg-main-bg">
        <section className="container-base py-[60px]">
          <h2
            className="section-title  
            mb-[30px]
            md:mb-[60px]"
          >
            Достижения
          </h2>
          <Content data={response} />
        </section>
      </div>
    </>
  );
};

export default Achievements;

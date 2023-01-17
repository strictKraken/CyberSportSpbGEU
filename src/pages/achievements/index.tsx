import type { NextPage } from "next";
import { useState } from "react";
import { useQuery } from "react-query";
import CardAchievement from "../../components/cards/CardAchievement";
import Pagination from "../../components/pagination";
import { AchievementServices } from "../../services/achievements.";
import convertDate from "../../utils/convertDate";

const Content = ({ data }: any) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scroll(0, 0);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-5 mb-[60px]">
        {data.data.map((item: any) => (
          <CardAchievement
            key={item.id}
            id={item.id}
            place={item.place}
            title={item.title}
            game={item.game}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          pageCount={data?.pagination.pageCount}
          // pageCount={10}
          total={data?.pagination.total}
          onChange={onPageChange}
          pageSize={data?.pagination.pageSize}
        />
      </div>
    </div>
  );
};

const Achievements: NextPage = () => {
  const {
    data: response,
    isLoading,
    isFetched,
  } = useQuery(
    ["achievemnts"],
    () => AchievementServices.getAchievements(1, 4),
    {
      select: ({ data }) => {
        return {
          ...data.meta,
          data: data.data.map((item: any) => {
            return {
              id: item.id,
              ...item.attributes,
              date: convertDate(item.attributes.publishedAt),
            };
          }),
        };
      },
      keepPreviousData: true,
    },
  );

  if (!isFetched) return <></>;

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
          {isLoading ? <></> : <Content data={response} />}
        </section>
      </div>
    </>
  );
};

export default Achievements;

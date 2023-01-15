import type { NextPage } from "next";
import { useQuery } from "react-query";
import CardNews, { ICardNews } from "../../components/cards/CardNews";
import ContainerTabs from "../../components/tabs/ContainerTabs";
import { ITab } from "../../components/tabs/tab";
import { NewsServices } from "../../services/news";

const ContentIvents = () => {
  return [];
};

const ContentNews = (data: ICardNews[]) => {
  return data.map((item: ICardNews) => (
    <CardNews key={item.id} id={item.id} title={item.title}></CardNews>
  ));
};

const Content = () => {
  const listTabs: string[] = ["Новости", "Ивенты"];
  // TO:DO change cahed array
  const { data: response } = useQuery(["news"], () => NewsServices.getNews);

  return (
    <section className="container-base md:pt-[40px] md:pb-[60px]">
      <ContainerTabs tabs={listTabs} activeTab={0}></ContainerTabs>
    </section>
  );
};

const Ivents: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Content />
    </div>
  </>
);

export default Ivents;

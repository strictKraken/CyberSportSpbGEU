import type { NextPage } from "next";
import { useQuery } from "react-query";
import CardNews, { ICardNews } from "../../components/cards/CardNews";
import ContainerTabs from "../../components/tabs/ContainerTabs";
import { NewsServices } from "../../services/news";
import convertDate from "../../utils/convertDate";

const ContentEvents = () => {
  const { data: response, isLoading } = useQuery(
    ["allEvents"],
    () => NewsServices.getEvents(),
    {
      select: ({ data }) =>
        data.data.map((item: any) => {
          return {
            id: item.id,
            ...item.attributes,
            date: convertDate(item.attributes.publishedAt),
            img: item.attributes.preview_img.data.attributes.url,
          };
        }),
    },
  );

  return Boolean(response) ? (
    response.map((item: any) => (
      <CardNews
        key={item.id}
        id={item.id}
        title={item.title}
        subTitle={item.date}
        imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
      />
    ))
  ) : (
    <></>
  );
};

const ContentNews = () => {
  const { data: response } = useQuery(
    ["allNews"],
    () => NewsServices.getNews(),
    {
      select: ({ data }) =>
        data.data.map((item: any) => {
          return {
            id: item.id,
            ...item.attributes,
            date: convertDate(item.attributes.publishedAt),
            img: item.attributes.preview_img.data.attributes.url,
          };
        }),
    },
  );
  return Boolean(response) ? (
    response.map((item: any) => (
      <CardNews
        key={item.id}
        id={item.id}
        title={item.title}
        subTitle={item.date}
        imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
      />
    ))
  ) : (
    <></>
  );
};

const Content = () => {
  const Tabs = [
    { name: "Новости", label: "news" },
    { name: "Ивенты", label: "events" },
  ];

  return (
    <section className="container-base pt-[40px] pb-[60px] md:pt-[40px] md:pb-[60px]">
      <ContainerTabs tabs={Tabs} activeTab="news">
        <div
          label="news"
          className="grid grid-cols-2 md:grid-cols-news-grid-main gap-6 "
        >
          <ContentNews />
        </div>
        <div label="events" className="grid grid-cols-2 gap-6">
          <ContentEvents />
        </div>
      </ContainerTabs>
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

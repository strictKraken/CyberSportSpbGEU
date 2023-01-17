import type { NextPage } from "next";

import ContainerTabs from "../../components/tabs/ContainerTabs";
import ContentTab from "./contentTab";

const Content = () => {
  const Tabs = [
    { name: "Новости", label: "article" },
    { name: "Ивенты", label: "event" },
  ];

  return (
    <section className="container-base pt-[40px] pb-[60px] md:pt-[40px] md:pb-[60px]">
      <ContainerTabs tabs={Tabs} activeTab="article">
        <div {...{ label: "article" }}>
          <ContentTab
            filter={"article"}
            pageSize={8}
            stylesContentContainer="grid grid-cols-2 md:grid-cols-news-grid-main gap-6 "
          />
        </div>
        <div {...{ label: "event" }}>
          <ContentTab
            filter={"event"}
            pageSize={6}
            stylesContentContainer="grid grid-cols-2 gap-6"
          />
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

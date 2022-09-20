import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import IconArrowRight from "../components/icons-svg/IconArrowRight";
import testImg from "../public/images/1.png";

import Head from "next/head";

import PurpleButton from "../components/buttons/PurpleButton";
import CardNews from "../components/cards/CardNews";

const SectionCarusel = () => (
  <section className="container mx-auto max-w-[1360px] px-5">
    <div>carusel</div>

    <PurpleButton onClick={() => {}}>
      все новости
      <IconArrowRight />
    </PurpleButton>
    <div className="h-1"></div>
    <PurpleButton>стать участником</PurpleButton>
    <CardNews
      title="ребрендинг"
      subTitle="Сентябрь 2022"
      imageUrl={testImg}
    ></CardNews>
  </section>
);

const SectionDescription = () => <section className=""></section>;

const Home: NextPage = () => (
  <MainLayout>
    <div className="h-screen bg-main-bg">
      <SectionCarusel />
    </div>
    <div className="h-[78px] w-full bg-gradient-to-b from-shadowFooter"></div>
  </MainLayout>
);

export default Home;

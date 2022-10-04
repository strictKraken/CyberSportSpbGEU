import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import MainLayout from "../layouts/MainLayout";
import IconArrowRight from "../components/icons-svg/IconArrowRight";
import testImg from "../public/images/1.png";
import logoPng from "../public/images/LogoPng.png";

// import Head from "next/head";

import PurpleButton from "../components/buttons/PurpleButton";
import CardNews from "../components/cards/CardNews";

export const getStaticProps: GetStaticProps = async () => {
  const news = [];

  return {
    props: {
      news,
    },
  };
};

const SectionTest = () => (
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

const SectionCarusel = () => (
  <section className="container mx-auto max-w-[1360px] px-5">
    <div></div>
  </section>
);

const SectionInfo = () => (
  <section className="container mx-auto max-w-[1360px] px-5">
    <div className="flex items-center justify-between flex-wrap mb-[142px]">
      <div className="flex-1 basis-1/2">
        <div className="max-w-[536px] max-h-[416px] relative">
          <Image
            src={logoPng}
            width={536}
            height={416}
            alt="logo"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-[536px]">
        <h3 className="font-heading text-[50px]">wild griffins</h3>
        <p className="font-text text-base indent-3">
          Мы киберспортивная организация на базе Санкт-Петербургского
          государственного экономического университета, направленная на
          продвижение игроков и проведение турниров по Dota 2, CS:GO,
          Hearthstone, Starcraft.
        </p>
        <p className="font-text text-base indent-3">
          Наша команда уже не раз становилась участником разнообразных турниров
          по многим дисциплинам и неоднократно побеждала на них.
        </p>
      </div>
    </div>
    {/* карусель из игр */}
    <div className="flex">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </section>
);

const SectionNews = () => (
  <section className="container mx-auto max-w-[1360px] px-5">
    <h3 className="font-heading text-[50px]">последние новости</h3>
    <div>
      <CardNews
        title="ребрендинг"
        subTitle="Сентябрь 2022"
        imageUrl={testImg}
      ></CardNews>
      <CardNews
        title="ребрендинг"
        subTitle="Сентябрь 2022"
        imageUrl={testImg}
      ></CardNews>
      <CardNews
        title="ребрендинг"
        subTitle="Сентябрь 2022"
        imageUrl={testImg}
      ></CardNews>
      <PurpleButton onClick={() => {}}>
        все новости
        <IconArrowRight />
      </PurpleButton>
    </div>
  </section>
);

const SectionContacts = () => (
  <section className="container mx-auto max-w-[1360px] px-5">
    <h3 className="font-heading text-[50px]">мы в соц. сетях</h3>
    <div>
      <div>присоединяйся в наш discord!</div>
    </div>
  </section>
);

const Home: NextPage = () => (
  <MainLayout>
    <div className="min-h-screen bg-main-bg">
      <SectionCarusel />
      <SectionInfo />
      <SectionNews />
      <SectionContacts />
    </div>
    {/* shadow */}
    <div className="h-[78px] w-full bg-gradient-to-b from-shadowFooter"></div>
  </MainLayout>
);

export default Home;

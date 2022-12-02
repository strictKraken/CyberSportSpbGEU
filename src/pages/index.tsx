import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import React from "react";

import MainLayout from "../layouts/MainLayout";

// Icons
import IconArrowRight from "../components/icons-svg/IconArrowRight";
import IconDiscord from "../components/icons-svg/IconDiscord";
import IconTwitch from "../components/icons-svg/IconTwitch";
import IconTelegram from "../components/icons-svg/IconTelegram";
import IconVk from "../components/icons-svg/IconVk";

import PurpleButton from "../components/buttons/BaseButton";
// import CardNews from "../components/cards/CardNews";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const getStaticProps: GetStaticProps = async () => {
  const news = [];
  return {
    props: {
      news,
    },
  };
};

import { SlidesData } from "../testData/HomePage/HomePage";
import { SlideData } from "../types/globalTypes";

const SectionCarusel = () => (
  <section className="">
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
    >
      {SlidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <CaruselSlide {...slide}></CaruselSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

const CaruselSlide = ({ title, subTitle, img }: SlideData) => {
  return (
    <div className="relative h-[100vh] min-h-[655px]">
      <div className="absolute top-0 left-0 -z-10 bottom-0 right-0">
        <Image
          src={img}
          alt={title}
          objectFit="cover"
          layout="fill"
          className="top-0"
        />
      </div>
      <div className="container mx-auto max-w-[1360px] px-5 flex flex-col justify-center h-full">
        <h2 className="font-heading text-[45px] leading-[40px] lg:text-[60px] max-w-[708px] lg:leading-[61px] mb-11">
          {title}
        </h2>
        <span className="font-text text-[20px] lg:text-[18px]">{subTitle}</span>
      </div>
    </div>
  );
};

import miniDota from "/public/images/list-games/dota.png";
import miniCS from "/public/images/list-games/cs.png";
import miniHS from "/public/images/list-games/hearth-stone.png";
import miniSC from "/public/images/list-games/star-craft.png";
import CardSocial from "../components/cards/CardSocial";

const SectionInfo = () => {
  const listGames = [miniDota, miniCS, miniHS, miniSC];
  return (
    <>
      <section className="container mx-auto max-w-[1360px] px-5">
        <div className="relative w-[280px] h-[240px] mx-auto">
          <Image
            src="/images/LogoPng.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div>
          <p className="indent-3">
            Мы киберспортивная организация на базе Санкт-Петербургского
            государственного экономического университета, направленная на
            продвижение игроков и проведение турниров по Dota 2, CS:GO,
            Hearthstone, Starcraft.
          </p>
          <p className="indent-3">
            Наша команда уже не раз становилась участником разнообразных
            турниров по многим дисциплинам и неоднократно побеждала на них.
          </p>
        </div>
      </section>
      {/* <div className="container mx-auto max-w-[1360px]">
        <div className="flex">
          {listGames.map((item) => (
            <div key={item.src}>
              <Image src={item} alt="game image of list" />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

const SectionNews = () => (
  <section className="container mx-auto max-w-[1360px] px-5 pt-[120px]">
    <h3 className="font-heading text-[50px] mb-[40px]">последние новости</h3>
    <div className="grid grid-cols-main-4 gap-6">
      {/* <CardNews
        title="ребрендинг"
        subTitle="Сентябрь 2022"
        imageUrl={testImg}
      ></CardNews> */}
      {/* <CardNews
        title="ребрендинг"
        subTitle="Сентябрь 2022"
        imageUrl={testImg}
      ></CardNews> */}
      {/* <CardNews
        title="ребрендинг"
        subTitle="Сентябрь 2022"
        imageUrl={testImg}
      ></CardNews> */}
      <div className="flex items-center">
        <div>
          <PurpleButton className="max-h-[48px]" onClick={() => {}}>
            все новости
            <IconArrowRight />
          </PurpleButton>
        </div>
      </div>
    </div>
  </section>
);

const SectionContacts = () => (
  <section className="container mx-auto max-w-[1360px] px-5 pt-[60px] pb-[60px]">
    <h3 className="font-heading text-[50px] mb-[40px]">мы в соц. сетях</h3>
    <div className="grid grid-cols-[minmax(648px,1fr)_minmax(0,1fr)] gap-6 ">
      {/* <div className="basis-1/2 grid gap-6 grid-rows-2 "> */}
      <div className="grid gap-6 grid-rows-2 ">
        <CardSocial className="" title="присоединяйся в наш discord!">
          <IconDiscord className="group-hover:fill-purpule" />
        </CardSocial>
        <CardSocial className="" title="присоединяйся в наш twitch!">
          <IconTwitch className="group-hover:fill-purpule" />
        </CardSocial>
      </div>
      <div className="basis-1/2 grid gap-6  2xl:grid-row-2 2xl:grid-cols-2">
        <CardSocial className="" title="присоединяйся в наш tg!">
          <IconTelegram className="group-hover:fill-purpule" />
        </CardSocial>
        <CardSocial className="" title="присоединяйся в наш vk!">
          <IconVk className="group-hover:fill-purpule" />
        </CardSocial>
      </div>
    </div>
  </section>
);

const Home: NextPage = () => (
  <MainLayout>
    <SectionCarusel />
    <SectionInfo />
    <SectionNews />
    {/* <div className="min-h-screen bg-main-bg">
      
      
      <SectionContacts />
    </div>
    <div className="h-[78px] w-full bg-gradient-to-b from-shadowFooter" /> */}
  </MainLayout>
);

export default Home;

import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Icons
const IconTwitch = dynamic(() => import("../components/icons-svg/IconTwitch"), {
  ssr: false,
});
const IconDiscord = dynamic(
  () => import("../components/icons-svg/IconDiscord"),
  {
    ssr: false,
  },
);
const IconTelegram = dynamic(
  () => import("../components/icons-svg/IconTelegram"),
  {
    ssr: false,
  },
);
const IconVk = dynamic(() => import("../components/icons-svg/IconVk"), {
  ssr: false,
});
import IconArrowRight from "../components/icons-svg/IconArrowRight";
// import IconDiscord from "../components/icons-svg/IconDiscord";
// import IconTwitch from "../components/icons-svg/IconTwitch";
// import IconTelegram from "../components/icons-svg/IconTelegram";
// import IconVk from "../components/icons-svg/IconVk";

import PurpleButton from "../components/buttons/BaseButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { imagesGames as listGames } from "../testData/staticData";

export const getStaticProps: GetStaticProps = async () => {
  const news = [];
  return {
    props: {
      // news,
    },
  };
};

import { SlidesData } from "../testData/HomePage/HomePage";
import { ShortNewsCard, SlideData } from "../types/globalTypes";

const SectionCarusel = () => (
  <section className="">
    <Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      navigation={true}
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
    <div className={`relative min-h-[555px] h-[90vh]`}>
      <div className="absolute top-0 left-0 -z-10 bottom-0 right-0">
        <Image
          src={img}
          alt={title}
          objectFit="cover"
          layout="fill"
          className="top-0"
          priority
        />
      </div>
      <div className="container-base flex flex-col justify-center h-full">
        <h2 className="font-heading text-dynamic leading-[102%] lg:text-[60px] max-w-[708px] mb-11">
          {title}
        </h2>
        <span className="font-text text-[20px] lg:text-[18px]">{subTitle}</span>
      </div>
    </div>
  );
};

import InfinityLineBoard from "../components/caruselBoard/InfinityLineboard";

const SectionInfo = () => {
  return (
    <>
      <section
        className="container-base
        py-[40px]
        lg:flex lg:justify-between lg:self-start
        lg:pt-[118px] lg:pb-[142px]
      "
      >
        <div
          className="relative w-[280px] h-[240px] mx-auto 
          lg:basis-1/2 lg:h-[416px] lg:max-w-[536px]
          
          "
        >
          <Image
            src="/images/LogoPng.png"
            alt="logo"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="lg:basis-1/2 lg:flex lg:flex-col lg:justify-center lg:self-center lg:max-w-[536px]">
          <h3
            className="section-title
            mb-1
            lg:mb-[40px]
          "
          >
            wild griffins
          </h3>
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
      <InfinityLineBoard slides={listGames} />
    </>
  );
};

import { getLastNews } from "../testData/HomePage/HomePage";
const SectionNews = () => (
  <section
    className="container-base 
    py-[40px]
    lg:pt-[140px] lg:pb-[60px]
    "
  >
    <h3
      className="section-title
      mb-5
      lg:mb-[40px]
    "
    >
      последние новости
    </h3>
    <div
      className="grid gap-6
      md:grid-cols-news-grid-main
      lg:items-center
    "
    >
      {getLastNews.map((item: ShortNewsCard) => (
        <CardNews
          key={item.id}
          title={item.title}
          subTitle={item.date}
          imageUrl={item.img}
        ></CardNews>
      ))}
      <div className="">
        <PurpleButton className="" onClick={() => {}}>
          все новости
          <IconArrowRight />
        </PurpleButton>
      </div>
    </div>
  </section>
);

import CardNews from "../components/cards/CardNews";
import VerticalCard from "../components/cards/cardSocial/verticalCard";
import HorizontCard from "../components/cards/cardSocial/horizontCard";
import dynamic from "next/dynamic";
const SectionContacts = () => (
  <section className="container-base pb-[60px]">
    <h3
      className="section-title
      lg:mb-[40px]
      mb-5
    "
    >
      мы в соц. сетях
    </h3>
    <div
      className="grid grid-cols-2 grid-flow-col gap-4
      sm:grid-cols-3
      md:grid-cols-3
      lg:grid-cols-2
      "
    >
      <div
        className="grid gap-4 
        sm:col-span-2
        lg:col-span-1
        "
      >
        <HorizontCard
          title="присоединяйся в наш discord!"
          icon={<IconDiscord className="group-hover:fill-purpule" />}
          url="/contacts/discrod"
        />
        <HorizontCard
          title="присоединяйся в наш vk!"
          icon={<IconVk className="group-hover:fill-purpule" />}
          url="/contacts/vk"
        />
      </div>

      <div
        className="grid gap-4 
        sm:col-span-3
        lg:col-span-1 lg:grid-cols-2
        "
      >
        <VerticalCard
          title="присоединяйся в наш twitch!"
          icon={<IconTwitch className="group-hover:fill-purpule" />}
          url="/contacts/twitch"
        />
        <VerticalCard
          title="присоединяйся в наш tg"
          icon={<IconTelegram className="group-hover:fill-purpule" />}
        />
      </div>
    </div>
  </section>
);

const Home: NextPage = () => (
  <>
    <SectionCarusel />
    <SectionInfo />
    <SectionNews />
    <SectionContacts />
  </>
);

export default Home;

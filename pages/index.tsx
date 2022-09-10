import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";
import IconArrowRight from "../components/icons-svg/IconArrowRight";

import Head from "next/head";
import Image from "next/image";
import PurpleButton from "../components/buttons/PurpleButton";
import CardNews from "../components/cards/CardNews";

const SectionCarusel = () => (
  <section className="container px-[60px]">
    <div>carusel</div>
    <PurpleButton onClick={() => {}}>
      все новости
      <IconArrowRight />
    </PurpleButton>
    <div className="h-1"></div>
    <PurpleButton>стать участником</PurpleButton>
    <CardNews title="ребрендинг"></CardNews>
  </section>
);

const Home: NextPage = () => (
  <MainLayout>
    <div className="h-screen bg-main-bg">
      <SectionCarusel />
    </div>
  </MainLayout>
);

export default Home;

import type { NextPage } from "next";
import Image from "next/image";
import PurpleButton from "../../components/buttons/BaseButton";

import { Teams } from "./data";

const Description = () => (
  <section className="container-base">
    <div className="">
      <div
        className=" 
        md:grid md:grid-cols-2 md:grid-rows-3 md:grid-flow-row auto-rows-auto
      "
      >
        <h3
          className="section-title mb-5 text-[28px]
          md:mb-0
          lg:text-[40px]
          xl:text-[50px]
        "
        >
          Привет,<br></br> мы wild griffins
        </h3>

        <div
          className="relative h-[266px] mb-8 
          md:row-span-2 md:h-full
          lg:row-span-3
          self-start
        "
        >
          <Image
            src="/images/LogoPng.png"
            objectFit="contain"
            layout="fill"
            alt="logo"
          />
        </div>
        <div
          className="mb-10
          
        "
        >
          <p className="mb-3">
            Киберспортивная организация на базе Санкт-Петербургского
            государственного экономического университета, направленная на
            продвижение игроков и проведение турниров.
          </p>
          <p>
            В ряду наших студентов есть спортсмены играющие в высших лигах,
            таких как: Dpc, Fpl и другие
          </p>
        </div>
      </div>
    </div>
  </section>
);

const OurTeams = () => {
  return (
    <section className="container-base pb-[32px]">
      {/* mobile view */}
      <div className="md:hidden">
        <h3 className="font-heading text-[16px] mb-[24px]">
          сборные ВУЗа по дисциплинам
        </h3>
        <div>
          <ul>
            {Teams.map((item) => (
              <li
                key={item.name}
                className="font-heading text-[16px] flex leading-4 justify-between  items-center h-[32px]"
              >
                <span>{item.name}</span>
                <div>
                  <Image src={item.image} alt="" width={163} height={32} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* desctop view */}
      <div className="hidden md:block">
        <div className="grid"></div>
      </div>
    </section>
  );
};

const HistoryOfClub = () => {
  return (
    <div className="mb-[64px]">
      <section className="container-base">
        <h3 className="font-heading text-[18px] leading-[1em] mb-[24px]">
          История клуба развития киберспорта
        </h3>
        <h2 className="font-heading text-[28px] leading-[1em] mb-8">
          От простого клуба до организации Wild Griffins
        </h2>
        <p className="font-text leading-6">
          Клуб образовался ещё в далеком 2019 году. На тот момент межвузовский
          киберспорт только зарождался в нашей стране и мы не стали исключением.
          Объединение инициативных студентов, которым нравилось играть в
          различные игры положило начало данной истории. В это время в Вузе
          только начиналась популяризация киберспорта и особых достижений
          достичь не удалось. Однако уже через год, с приходом новых студентов
          появилась возможность образования сильного состава по игре Valorant.
          Их победа на «Red Bull Campus Clutch» положила начало дальнейшим
          достижениям наших ребят.
        </p>
      </section>
      <div></div>
    </div>
  );
};

const Additionals = () => {
  return (
    <div className="">
      <section className="container-base pb-16">
        <h2 className="font-heading text-[28px] leading-[1em] mb-8">
          Сложные времена
        </h2>
        <p>
          Период карантина затронул всех и каждого, так и межвузовский
          киберспорт не остался в стороне. В 2020-2021 годах клуб проживал
          стадию забвения. Крупных достижений в это время показать не удалось,
          но оставались победы на небольших онлайн турнирах.
        </p>
      </section>
      <section className="container-base  pb-16">
        <h2 className="font-heading text-[28px] leading-[1em] mb-8">
          Реорганизация
        </h2>
        <p>
          2022 год стал ключевым в истории клуба. Новое руководство, выбранное
          на основании выборов участников студенческого совета, решает дать
          клубу новую жизнь. Меняется логотип, появляется уже узнаваемое многими
          название “Wild Griffins”, появляется сайт и активно развивается
          медийная структура организации. Этот новый этап дарит нам
          неоднократные победы на всевозможных турнирах Санкт-Петербурга и
          Российской Федерации. И это только начало!{" "}
        </p>
      </section>
      <div>{/* <Image></Image> */}</div>
    </div>
  );
};

const JoinUs = () => {
  return (
    <section className="container-base py-8 bg-white">
      <h2 className="font-heading text-[28px] leading-[1em] mb-[24px] text-main-bg">
        Присоединяйся к нашей команде
      </h2>
      <p className="text-main-bg mb-8">
        Мы победители кубка главы администрации невского района по Dota 2
        Победители межвузовского турнира “CyberGuGa” Призеры СКЛ Неоднократные
        Победители в турнирах от “Epulze” и “Challangermode” Победители
        квалификаций “Red Bull Campus Clutch” по Valorant
      </p>
      <PurpleButton>Стать участником</PurpleButton>
    </section>
  );
};

const About: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Description />
      <OurTeams />
      <HistoryOfClub />
      <Additionals />
      <JoinUs />
    </div>
  </>
);

export default About;

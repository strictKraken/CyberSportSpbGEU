import type { NextPage } from "next";
import Image from "next/image";
import PurpleButton from "../../components/buttons/BaseButton";

import { Teams } from "./data";

const Description = () => (
  <section className="container-base">
    <div className="">
      <div className="">
        <h3 className="section-title">
          Привет,<br></br> мы wild griffins
        </h3>
        <div className="relative h-[266px]">
          <Image
            src="/images/LogoPng.png"
            objectFit="cover"
            layout="fill"
            alt="logo"
          ></Image>
        </div>
        <div>
          <p>
            Киберспортивная организация на базе Санкт-Петербургского
            государственного экономического университета, направленная на
            продвижение игроков и проведение турниров.{" "}
          </p>
          <p>
            В ряду наших студентов есть спортсмены играющие в высших лигах,
            таких как: Dpc, Fpl и другие
          </p>
        </div>
      </div>
      <div>
        {/* <Image
          src="/images/LogoPng.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
        ></Image> */}
      </div>
    </div>
  </section>
);

const OurTeams = () => {
  return (
    <section className="container-base">
      <h3>сборные ВУЗа по дисциплинам</h3>
      <div>
        <ul>
          {Teams.map((item) => (
            <li key={item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const HistoryOfClub = () => {
  return (
    <>
      <section className="container-base">
        <h3>История клуба развития киберспорта</h3>
        <h2>От простого клуба до организации Wild Griffins</h2>
        <p>
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
    </>
  );
};

const Additionals = () => {
  return (
    <div>
      <section>
        <h2>Сложные времена</h2>
        <p>
          Период карантина затронул всех и каждого, так и межвузовский
          киберспорт не остался в стороне. В 2020-2021 годах клуб проживал
          стадию забвения. Крупных достижений в это время показать не удалось,
          но оставались победы на небольших онлайн турнирах.
        </p>
      </section>
      <section>
        <h2>Реорганизация</h2>
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
    <section className="container-base">
      <h2>Присоединяйся к нашей команде</h2>
      <p>
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
    </div>
  </>
);

export default About;

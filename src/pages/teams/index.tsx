import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import PurpleButton from "../../components/buttons/BaseButton";
import CardTeam from "../../components/cards/CardTeam";

const Join = () => {
  return (
    <section className="container-base pb-[30px] mb:pb-[158px]">
      <div
        className="flex items-center gap-[16px] 
        md:gap-[24px]"
      >
        <div className="hidden md:block w-[80px] h-[80px] bg-purpule rounded-[50%]" />

        <Image
          src={"/images/pageTeams/csLogo.png"}
          width={74}
          height={74}
          alt=""
        />
        <h2 className="section-title text-titleBigDynamic">присоединяйся</h2>
      </div>
      <div>
        <h2
          className="section-title text-titleBigDynamic relative overflow-hidden w-fit
          "
        >
          играй
          <div className="gap-[10px] hidden md:flex">
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] md:w-[24px] md:h-[24px]" />
          </div>
          <div className="gap-[8px] flex md:hidden ">
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px] " />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />

            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
          </div>
        </h2>
      </div>
      <div className="md:flex">
        <div className="md:order-2">
          <h2
            className="section-title text-titleBigDynamic relative max-w-max
          after:content-[''] after:w-full after:h-[8px] after:bg-white after:absolute after:bottom-0 after:left-0"
          >
            побеждай
          </h2>
          <div></div>
        </div>
        <div>
          <p
            className="font-text 
          md:max-w-[289px]"
          >
            Присоединяйся, становись членом команды и участвуй в киберспортивных
            турнирах
          </p>
          <div className="md:max-w-[275px]">
            <PurpleButton>Стать участником</PurpleButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamsBlock = () => {
  return (
    <section className="container-base pb-[60px] lg:pb-[120px]">
      <h3 className="section-title mb-[20px] md:mb-[40px]">Наши команды</h3>
      <div
        className="[&>div]:mb-5
        md:[&>div]:mb-0 md:grid md:grid-cols-2 md:gap-6
      "
      >
        <CardTeam
          imgUrl={"/images/pageTeams/dotaCard.png"}
          nameImgUrl={"/images/pageTeams/dotaName.svg"}
          name="dota"
          url={`/teams/dota`}
          widthImage={"380"}
          hieghtImage={"246"}
        />
        <CardTeam
          imgUrl={"/images/pageTeams/csCard.png"}
          nameImgUrl={"/images/pageTeams/csName.svg"}
          name="cs"
          url={"/teams/cs"}
          widthImage={"321"}
          hieghtImage={"246"}
        />
        <CardTeam
          imgUrl={"/images/pageTeams/hsCard.png"}
          nameImgUrl={"/images/pageTeams/hsName.svg"}
          name="cs"
          url={"teams/hs"}
          widthImage={"367"}
          hieghtImage={"246"}
        />
        <CardTeam
          imgUrl={"/images/pageTeams/scCard.png"}
          nameImgUrl={"/images/pageTeams/scName.svg"}
          name="sc"
          url={"teams/sc"}
          widthImage={"364"}
          hieghtImage={"246"}
        />
        {/* <CardTeam name="valorant" imgUrl={""} nameImgUrl={""} />
        <CardTeam name="clash" imgUrl={""} nameImgUrl={""} /> */}
      </div>
    </section>
  );
};

const Teams: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Join />
      <TeamsBlock />
    </div>
  </>
);

export default Teams;

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import PurpleButton from "../../components/buttons/BaseButton";
import CardTeam from "../../components/cards/CardTeam";

const Join = () => {
  return (
    <section className="container-base pb-[30px] mb:pb-[158px]">
      <div
        className="flex items-center gap-[16px] pt-4 md:pt-[42px]
        md:gap-[24px]"
      >
        <div className="hidden md:block w-[80px] h-[80px] bg-purpule rounded-[50%]" />

        <Image
          src={"/images/pageTeams/csLogo.svg"}
          width={74}
          height={74}
          alt=""
        />
        <h2 className="section-title text-titleBigDynamic">присоединяйся</h2>
      </div>
      <div className="flex items-center justify-between md:justify-start md:gap-16">
        <div className="relative overflow-hidden w-fit">
          <h2 className="section-title text-titleBigDynamic pb-[14px] leading-[1.5em]">
            играй
          </h2>
          <div className="absolute top-[75%] left-0">
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
            <div className="gap-[4px] flex md:hidden ">
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
              <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
              <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
              <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
              <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
              <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
              <div className="rounded-[50%] bg-purpule w-[8px] h-[8px]" />
            </div>
          </div>
        </div>

        <div>
          <div className="block md:hidden">
            <Image
              src={"/images/pageTeams/screenContent/start-svg.svg"}
              width={102}
              height={104}
              alt=""
            />
          </div>
          <div className="hidden md:block">
            <Image
              src={"/images/pageTeams/screenContent/start-svg.svg"}
              width={208}
              height={210}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="md:hidden">
            <Image
              src={"/images/pageTeams/screenContent/screenContent1.svg"}
              width={124}
              height={123}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="md:flex">
        <div className="relative md:order-2 mb-[45px] md:ml-auto md:mr-[230px]">
          <h2
            className="section-title text-titleBigDynamic relative max-w-max
            after:content-[''] after:w-full after:h-[4px] md:after:h-[8px]  after:bg-white after:absolute after:bottom-0 after:left-0
            "
          >
            побеждай
          </h2>
          <div
            className="absolute right-0 top-1/2 w-[130px] h-[130px]
            md:right-[-230px] md:top-0 md:w-[230px] md:h-[230px]
            "
          >
            <Image
              src={"/images/pageTeams/screenContent/screenContent3.svg"}
              layout="fill"
              alt=""
            />
          </div>
        </div>
        <div>
          <p
            className="font-text mb-[50px] max-w-[269px] 
            md:max-w-[289px]"
          >
            Присоединяйся, становись членом команды и участвуй в киберспортивных
            турнирах
          </p>
          <div className="md:max-w-[275px]">
            <PurpleButton>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeSn4Urdw1HIjydN1ivAuxQxOyYBM5hWc3CylRMl4OvA6qgEg/viewform"
                target="_blank"
                rel="noreferrer"
              >
                Стать участником
              </a>
            </PurpleButton>
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

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import PurpleButton from "../../components/buttons/BaseButton";
import CardTeam from "../../components/cards/CardTeam";

const Join = () => {
  return (
    <section className="container-base pb-[30px] mb:pb-[158px]">
      <div className="flex items-center gap-[16px]">
        <Image
          src={"/images/pageTeams/csLogo.png"}
          width={74}
          height={74}
          alt=""
        />
        <h2 className="section-title text-titleBigDynamic">присоединяйся</h2>
      </div>
      <div>
        <h2 className="section-title text-titleBigDynamic">играй</h2>
        <div></div>
      </div>
      <div>
        <h2 className="section-title text-titleBigDynamic">побеждай</h2>
        <div></div>
      </div>
      <div>
        <PurpleButton>Стать участником</PurpleButton>
      </div>
    </section>
  );
};

const TeamsBlock = () => {
  return (
    <section className="container-base">
      <h3 className="section-title">Наши команды</h3>
      <div
        className="[&>div]:mb-5
        md:[&>div]:mb-0 md:grid md:grid-cols-2 md:gap-6
      
      "
      >
        <CardTeam
          imgUrl={"/images/pageTeams/dotaCard.png"}
          nameImgUrl={"/images/pageTeams/dotaName.svg"}
          name="dota"
          url="/teams/dota"
        />
        <CardTeam
          imgUrl={"/images/pageTeams/csCard.png"}
          nameImgUrl={"/images/pageTeams/csName.svg"}
          name="cs"
          url={"/teams/cs"}
        />
        <CardTeam
          imgUrl={"/images/pageTeams/hsCard.png"}
          nameImgUrl={"/images/pageTeams/hsName.svg"}
          name="cs"
          url={"teams/hs"}
        />
        <CardTeam
          imgUrl={"/images/pageTeams/scCard.png"}
          nameImgUrl={"/images/pageTeams/scName.svg"}
          name="sc"
          url={"teams/sc"}
        />
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

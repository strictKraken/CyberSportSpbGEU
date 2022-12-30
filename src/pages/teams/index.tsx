import type { NextPage } from "next";
import Link from "next/link";

const Join = () => {
  <section className="container-base">
    <h2>присоединяйся</h2>
    <div></div>
  </section>;
};

const TeamsBlock = () => {
  return (
    <section className="container-base">
      <h3 className="font-heading text-[50px]">Наши команды</h3>
      <div>
        <div>
          <Link href={"/teams/dota"}>dota 2</Link>
        </div>
        <div>
          <Link href={"/teams/cs"}>cs go</Link>
        </div>
        <div>
          <Link href={"/teams/hs"}>hs</Link>
        </div>
        <div>
          <Link href={"/teams/sc"}>sc 2</Link>
        </div>
      </div>
    </section>
  );
};

const Teams: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <TeamsBlock />
    </div>
  </>
);

export default Teams;

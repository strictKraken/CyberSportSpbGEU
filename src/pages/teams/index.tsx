import type { NextPage } from "next";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="font-heading text-3xl">Comming soon...</h1>
  </section>
);

const Join = () => {
  <section className="container mx-auto max-w-[1360px] px-5">
    <h2>присоединяйся</h2>
    <div></div>
  </section>;
};

const TeamsBlock = () => {
  <section className="container mx-auto max-w-[1360px] px-5">
    <h3 className="font-heading text-[50px]">Наши команды</h3>
    <div>
      <div></div>
    </div>
  </section>;
};

const Teams: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Info />
    </div>
  </>
);

export default Teams;

import type { NextPage } from "next";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="font-heading text-3xl">Comming soon...</h1>
  </section>
);

const Achievements: NextPage = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Info />
    </div>
  </>
);

export default Achievements;

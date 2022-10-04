import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="text-3xl">Invents page</h1>
  </section>
);

const Ivents: NextPage = () => (
  <MainLayout>
    <div className="min-h-screen bg-main-bg">
      <Info />
    </div>
    <div className="h-[78px] w-full bg-gradient-to-b from-shadowFooter"></div>
  </MainLayout>
);

export default Ivents;

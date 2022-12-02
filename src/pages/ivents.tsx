import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="font-heading text-3xl">Comming soon...</h1>
  </section>
);

const Ivents: NextPage = () => (
  <MainLayout>
    <div className="min-h-screen bg-main-bg">
      <Info />
    </div>
  </MainLayout>
);

export default Ivents;

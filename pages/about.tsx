import type { NextPage } from "next";
import MainLayout from "../layouts/MainLayout";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="text-3xl">About page</h1>
  </section>
);

const About: NextPage = () => (
  <MainLayout>
    <div className="h-screen bg-main-bg">
      <Info />
    </div>
  </MainLayout>
);

export default About;

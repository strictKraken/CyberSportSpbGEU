import type { NextPage } from "next";
import Image from "next/image";
import PageLayout from "../../components/layouts/PageLayout";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="font-heading text-3xl">Comming soon...</h1>
  </section>
);

const SectionCollaboration = () => {
  return (
    <section className="py-[30px]">
      <div className="flex flex-col items-center md:justify-between md:flex-row">
        <div className="basis-1/2 order-2">
          <h3 className="section-title mb-2 md:mb-[60px]">сотрудничество</h3>
          <p className="mb-8 md:mb-[42px]">
            Сотрудники «Wild Griffins» всегда готовы оказать вам помощь и
            рассмотреть ваши пожелания и предложения в сфере маркетинга, СМИ.
            Связаться с нами вы можете через электронную почту или ссылки в ВК,
            указанные ниже.
          </p>
          <div className="mb-[8px]">
            <span className="text-[16px] text-white font-bold mr-3">
              По общим вопросам
            </span>
            <a
              href="https://vk.com/uneconcybersport"
              target="_blank"
              rel="noreferrer"
              className="text-purpule"
            >
              https://vk.com/uneconcybersport
            </a>
          </div>
          <div>
            <span className="text-[16px] text-white font-bold mr-3">
              По вопросам партнерства и спонсорства
            </span>
            <a href="mailto:wild-griffins@mail.ru" className="text-purpule">
              wild-griffins@mail.ru
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={"/images/collaboration.png"}
            width={484}
            height={400}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const Contacts: NextPage = () => (
  <>
    <div className="min-h-screen container mx-auto max-w-[1360px] px-5">
      <SectionCollaboration />
    </div>
  </>
);

export default Contacts;

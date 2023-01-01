import Image from "next/image";

const Info = () => (
  <section className="container px-[60px]">
    <h1 className="font-heading text-3xl">Comming soon...</h1>
  </section>
);

const TwitchPage = () => {
  return (
    <section>
      <div className="flex gap-[24px]">
        <h2 className="section-title">следи за нами на twitch</h2>
        <div className="h-[54px] w-[56px]">
          <Image src={"/icons/logoTwitchArrow.svg"} layout="fill" alt="" />
        </div>
      </div>
    </section>
  );
};

const Iframe = () => {
  return <></>;
};

const Stream: React.FC = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <Info />
    </div>
  </>
);

export default Stream;

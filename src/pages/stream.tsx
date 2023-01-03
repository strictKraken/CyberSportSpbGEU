import Image from "next/image";

const TwitchPage = () => {
  return (
    <section className="container-base min-h-full">
      <div className="flex gap-[24px]">
        <h2 className="section-title">следи за нами на twitch</h2>
        <div className="h-[54px] w-[56px] relative">
          <Image src={"/icons/logoTwitchArrow.svg"} layout="fill" alt="" />
        </div>
      </div>
      <div className="h-full">
        <iframe
          src="https://player.twitch.tv/?channel=wild_griffins&parent=localhost:3000"
          allowFullScreen={true}
          width="100%"
          height="100%"
        />
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
      <TwitchPage />
    </div>
  </>
);

export default Stream;

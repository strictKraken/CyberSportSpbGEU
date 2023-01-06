import Image from "next/image";
import { linkSocial } from "../testData/staticData";

const TwitchPage = () => {
  return (
    <section className="container-base min-h-full">
      <a
        className="flex gap-[24px] justify-center items-center"
        href={linkSocial[3].url}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="section-title">следи за нами на twitch</h2>
        <div className="h-[54px] w-[56px] relative">
          <Image src={"/icons/logoTwitchArrow.svg"} layout="fill" alt="" />
        </div>
      </a>
      <Iframe />
    </section>
  );
};

const Iframe = () => {
  return (
    <div className="h-full">
      <iframe
        src="https://player.twitch.tv/?channel=wild_griffins&parent=localhost:3000"
        allowFullScreen={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

const Stream: React.FC = () => (
  <>
    <div className="min-h-screen bg-main-bg">
      <TwitchPage />
    </div>
  </>
);

export default Stream;

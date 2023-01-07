import Image from "next/image";
import { linkSocial } from "../testData/staticData";

const TwitchPage = () => {
  return (
    <section className="container-base min-h-full ">
      <a
        className="flex gap-[24px] justify-center items-center mb-5 lg:mb-[100px]"
        href={linkSocial[3].url}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="section-title">следи за нами на twitch</h2>
        <div className="h-full relative">
          <Image
            src={"/icons/logoTwitchArrow.svg"}
            width={56}
            height={54}
            alt=""
          />
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
        className="h-[480px] lg:h-[720px]"
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
    <div className="min-h-screen bg-main-bg lg:pb-[60px]">
      <TwitchPage />
    </div>
  </>
);

export default Stream;

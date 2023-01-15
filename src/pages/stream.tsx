import Image from "next/image";
import { linkSocial } from "../testData/staticData";

const TwitchPage = () => {
  return (
    <section className="container-base min-h-full pt-[40px] md:pt-[100px]">
      <a
        className="flex gap-[24px] justify-center items-center mb-5 lg:mb-[100px]
          group 
        "
        href={linkSocial[3].url}
        target="_blank"
        rel="noreferrer"
      >
        <h2
          className="section-title 
          transition-colors 200s ease-linear group-hover:text-purpule"
        >
          следи за нами на twitch
        </h2>
        <div className="h-full relative group-hover:[&>svg>fill]:bg-purpule">
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
        src={`https://player.twitch.tv/?channel=wild_griffins&parent=cybersportspbgeu.ru`}
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

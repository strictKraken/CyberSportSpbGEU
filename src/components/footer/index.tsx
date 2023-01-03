import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLink } from "../../types/globalTypes";
import SpoilerBlock from "./spoilerBlock";

import IconTwitch from "../icons-svg/IconTwitch";
import IconDiscord from "../icons-svg/IconDiscord";
import IconVk from "../icons-svg/IconVk";
import IconTelegram from "../icons-svg/IconTelegram";
import LogoFooter from "/public/icons/halfLogoFooter.svg";

import { socialLinks } from "../../utils/contactLink";

interface Props {
  navList: navLink[];
}

const Info = () => {
  return (
    <>
      <div className="flex flex-col self-center">
        <Image
          className="z-20"
          src="/icons/logo.svg"
          alt="logo"
          width={60}
          height={60}
        />
        <span className="text-purpule font-heading text-[20px] block text-center">
          wild griffins
        </span>
      </div>
      <p className="text-[#6B6B72] text-[16px]">
        Киберспортивная команда Wild Griffins при поддержке СПбГЭУ 2022
      </p>
    </>
  );
};

const Contacts = ({}) => {
  const [isOpenContacts, setIsOpenContacts] = useState<boolean>(false);

  return (
    <>
      <h5
        className="text-purpule text-[24px] font-heading mb-2"
        onClick={() => setIsOpenContacts(!isOpenContacts)}
      >
        соц. сети
      </h5>
      <SpoilerBlock isShow={isOpenContacts}>
        <div className="grid grid-cols-2 gap-5">
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer"
              href={socialLinks[0].url}
              target="_blank"
              rel="noreferrer"
            >
              <IconTwitch />
            </a>
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <IconDiscord />
            </a>
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <IconVk />
            </a>
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer">
            <a
              className="[&>svg]:w-[50px] [&>svg]:h-[50px] cursor-pointer"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <IconTelegram />
            </a>
          </div>
        </div>
      </SpoilerBlock>
    </>
  );
};

const Navigation = ({ navList }: Props) => {
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  return (
    <>
      <h5
        className="text-purpule text-[24px] font-heading mb-0"
        onClick={() => setIsOpenNav(!isOpenNav)}
      >
        Сайт
      </h5>
      <SpoilerBlock isShow={isOpenNav}>
        <ul className="mb-2">
          {navList.map((item: navLink) => (
            <li key={`link-${item.name}`} className="text-[20px]">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </SpoilerBlock>
    </>
  );
};

const Footer: React.FC<Props> = ({ navList }) => {
  return (
    <footer className="w-full bg-main-bg overflow-hidden bottom-0 z-[-1] fixed h-[372px]">
      <div className="relative h-full">
        <div className="container mx-auto max-w-[1360px] px-5 pb-[70px]">
          <div
            className="flex flex-col gap-0
            sm:flex-row sm:gap-[45px] sm:flex-wrap
            "
          >
            <div
              className="order-3 self-center w-full 
              lg:order-1 lg:self-start lg:mr-[140px] lg:max-w-[215px]
              "
            >
              <Info />
            </div>
            <nav className="order-1">
              <Navigation navList={navList} />
            </nav>
            <div className="order-2 mb-10 basis-1/3 max-w-fit">
              <Contacts />
            </div>
          </div>
          <div className="right-0 bottom-0 -z-[1] hidden xl:block xl:absolute">
            <Image src={LogoFooter} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

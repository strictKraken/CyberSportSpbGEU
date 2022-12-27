import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLink } from "../../types/globalTypes";
import SpoilerBlock from "./spoilerBlock";

import IconTwitch from "../icons-svg/IconTwitch";
import IconDiscord from "../icons-svg/IconDiscord";
import IconVk from "../icons-svg/IconVk";
import IconTelegram from "../icons-svg/IconTelegram";

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
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px]">
            <IconTwitch />
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px]">
            <IconDiscord />
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px]">
            <IconVk />
          </div>
          <div className="[&>svg]:w-[50px] [&>svg]:h-[50px]">
            <IconTelegram />
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
    <footer className="w-full bg-main-bg pb-9 pt-[40px]">
      <div className="container mx-auto max-w-[1360px] px-5">
        <div className="flex flex-col gap-0">
          <div className="order-3">
            <Info />
          </div>
          <nav className="order-1">
            <Navigation navList={navList} />
          </nav>
          <div className="order-2 mb-10">
            <Contacts />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

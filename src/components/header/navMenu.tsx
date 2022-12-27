import Burger from "./burger";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLink } from "../../types/globalTypes";
import { useScrollBlock } from "../../hooks/useScrollBlock";

type Props = {
  navList: navLink[];
};

const NavMenu = ({ navList }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const onNavOpen = (isOpen: boolean) => {
    setIsOpen(!isOpen);
    !isOpen ? blockScroll() : allowScroll();
  };

  return (
    <nav className="flex items-center xl:gap-[48px]">
      <Link href="/" className="">
        {/* refactoring */}
        <Image
          className="z-20"
          src="/icons/logo.svg"
          alt="logo"
          width={60}
          height={60}
        />
      </Link>
      <div
        className={`absolute left-0 top-0 ${
          isOpen ? "opacity-100 block" : "opacity-0 hidden"
        }  bg-main-bg w-full xl:static z-10 transition-all duration-500 xl:opacity-100 xl:block`}
      >
        <ul className="flex flex-col items-center h-[100vh] xl:h-auto xl:pt-0 xl:items-start  xl:flex-row xl:gap-10">
          {navList.map((item) => (
            <li
              key={`link-${item.path}`}
              className="font-heading text-[30px] xl:text-[16px]"
            >
              <LinkItem name={item.name} path={item.path} />
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto xl:hidden z-20" onClick={() => onNavOpen(isOpen)}>
        <Burger />
      </div>
    </nav>
  );
};

const LinkItem = ({ name, path }: navLink) => <Link href={path}>{name}</Link>;

export default NavMenu;

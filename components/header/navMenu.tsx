import Burger from "./burger";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type navList = {
  navList: any[];
};

const NavMenu = ({ navList }: navList) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center">
      <Link href="/">
        {/* refactoring */}
        <Image src="/icons/logo.svg" alt="Логотип" width={60} height={60} />
      </Link>
      <div className="ml-auto" onClick={() => setIsOpen(!isOpen)}>
        <Burger />
      </div>
      <div
        className={`absolute left-0 h-[100vh] bg-slate-500 w-full z-[-1] transition-all duration-500 ease ${
          isOpen ? "top-0" : "top-[-100vh]"
        }`}
      >
        <ul className="">
          {navList.map((item) => (
            <LinkItem key={`link-${item.to}`} name={item.name} to={item.to} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

const LinkItem = ({ name, to }) => (
  <li className="font-batman">
    <Link
      href={to}
      className="hover:text-purpule transition-colors hover:ease-linearhover:text-purpule translate-colors hover:ease-linear"
    >
      {name}
    </Link>
  </li>
);

export default NavMenu;

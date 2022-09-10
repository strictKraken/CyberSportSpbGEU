import Link from "next/link";
import NavMenu, { Items } from "./NavMenu";

interface Props {
  navList: Items[];
}

const Header: React.FC<Props> = ({ navList }) => {
  return (
    <header className="container mx-auto px-[60px] flex gap-[48px] items-center">
      <Link href="/" className="flex-none">
        LOGO
      </Link>
      <NavMenu
        items={navList}
        className={"flex font-batman gap-[40px]"}
      ></NavMenu>
    </header>
  );
};

export default Header;

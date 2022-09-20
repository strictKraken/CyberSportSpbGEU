import Link from "next/link";
import NavMenu, { Items } from "./NavMenu";

type Props = {
  navList: Items[];
};

const Header: React.FC<Props> = ({ navList }: Props) => {
  return (
    <header className="w-full">
      <div className="container mx-auto max-w-[1360px] px-5">
        <div className="flex gap-[48px]">
          <Link href="/" className="flex-none">
            LOGO
          </Link>
          <NavMenu
            items={navList}
            className={"flex font-batman gap-[40px]"}
          ></NavMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

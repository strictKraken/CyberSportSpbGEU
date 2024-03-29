import NavMenu from "./navMenu";
import { navLinks } from "../../utils/headerData";

const Header = () => {
  return (
    <header className="w-full fixed z-20 bg-main-bg drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
      <div className="container mx-auto max-w-[1360px] px-5 py-3 md:py-6">
        <NavMenu navList={navLinks} />
      </div>
    </header>
  );
};

export default Header;

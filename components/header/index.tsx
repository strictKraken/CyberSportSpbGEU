import NavMenu from "./navMenu";

const navList = [
  {
    name: "главная",
    to: "/",
  },
  {
    name: "о нас",
    to: "/about",
  },
  {
    name: "ивенты",
    to: "/ivents",
  },
  {
    name: "команда",
    to: "/teams",
  },
  {
    name: "достижения",
    to: "/achivments",
  },
  {
    name: "сотрудничество",
    to: "/contantc",
  },
  {
    name: "twitch",
    to: "/stream",
  },
];

const Header = () => {
  return (
    <header className="w-full py-2">
      <div className="container mx-auto max-w-[1360px] px-5">
        <NavMenu navList={navList}></NavMenu>
      </div>
    </header>
  );
};

export default Header;

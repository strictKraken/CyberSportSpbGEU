import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const navList = [
  {
    name: "главная",
    link: "/",
  },
  {
    name: "о нас",
    link: "/about",
  },
  {
    name: "ивенты",
    link: "/ivents",
  },
  {
    name: "команда",
    link: "/teams",
  },
  {
    name: "достижения",
    link: "",
  },
  {
    name: "сотрудничество",
    link: "",
  },
  {
    name: "твич",
    link: "/stream",
  },
];

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header navList={navList} />
    <main>{children}</main>
    <Footer navList={navList} />
  </>
);

export default MainLayout;

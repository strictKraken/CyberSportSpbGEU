import Header from "../components/header";
import Footer from "../components/footer";
import { navLinks } from "../utils/headerData";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    {/* <Header navList={navLinks} /> */}
    <Header />
    <main>{children}</main>
    <Footer navList={navLinks} />
  </>
);

export default MainLayout;

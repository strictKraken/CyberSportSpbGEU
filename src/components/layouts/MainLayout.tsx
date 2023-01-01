import Header from "../header";
import Footer from "../footer";
import { navLinks } from "../../utils/headerData";
import PageLayout from "./PageLayout";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <PageLayout>
      <main>{children}</main>
    </PageLayout>
    <Footer navList={navLinks} />
  </>
);

export default MainLayout;
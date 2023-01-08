import dynamic from "next/dynamic";
import { Suspense } from "react";

const Header = dynamic(() => import("../header"), {});
const PageLayout = dynamic(() => import("./PageLayout"));
const Footer = dynamic(() => import("../footer"));

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    <Suspense>
      <PageLayout>
        <main>{children}</main>
      </PageLayout>
    </Suspense>
    <Footer />
  </>
);

export default MainLayout;

// import NavMenu, { Items } from "./navMenu/NavMenu";
interface Props {
  navList: Items[];
}

const Footer: React.FC<Props> = ({ navList }) => {
  return (
    <footer className="w-full bg-main-bg">
      <div className="container mx-auto max-w-[1360px] px-5">
        <h2 className="text-3xl text-center">Footer</h2>
        {/* <NavMenu items={navList} className={"gap-[16px] font-batman"}></NavMenu> */}
      </div>
    </footer>
  );
};

export default Footer;

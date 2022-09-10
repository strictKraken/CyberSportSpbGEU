import NavMenu, { Items } from "./NavMenu";
interface Props {
  navList: Items[];
}

const Footer: React.FC<Props> = ({ navList }) => {
  return (
    <footer className="container px-[60px]">
      <h2 className="text-3xl text-center">Footer</h2>
      <NavMenu items={navList} className={"gap-[16px] font-batman"}></NavMenu>
    </footer>
  );
};

export default Footer;

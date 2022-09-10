import LinkButton from "./navMenu/LinkButton";

export interface Items {
  name: string;
  link: string;
}

interface INavMenu {
  items: Items[];
  className?: string | "";
}

const NavMenu: React.FC<INavMenu> = ({ items, className }) => (
  <nav>
    <ul className={className}>
      {items.map((listItem) => (
        <li key={listItem.name}>
          <LinkButton href={listItem.link}>{listItem.name}</LinkButton>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavMenu;

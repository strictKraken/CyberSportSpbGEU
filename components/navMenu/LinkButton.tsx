import Link from "next/link";

export interface Props {
  children: React.ReactNode;
  href: string;
}

const LinkButton: React.FC<Props> = ({ href, children }) => {
  return (
    <Link
      href={{
        pathname: href,
      }}
      as={`${href}`}
    >
      <a className="hover:text-purpule transition-colors hover:ease-linear">
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;

import Link from "next/link";

export interface ICardEvent {
  id: string;
  title: string;
  subTitle?: string;
  imageUrl?: any;
}

const CardEvent: React.FC<ICardEvent> = ({ id, title, subTitle, imageUrl }) => {
  return (
    <Link href={`/${id}`}>
      <a>
        <div></div>
      </a>
    </Link>
  );
};

export default CardEvent;

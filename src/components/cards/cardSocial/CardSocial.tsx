import { CardSocialT } from "../../../types/globalTypes";
import { useRouter } from "next/router";
import VerticalCard from "./verticalCard";
import HorizontCard from "./horizontCard";

export const redirect = (url: string) => {};

enum TypeCard {
  vertical,
  horizontal,
}

interface ICardSocial extends CardSocialT {
  children: React.ReactNode;
  typeCard: TypeCard;
}

const CardSocial: React.FC<ICardSocial> = ({ children, typeCard }) => {
  return (
    <>
      {typeCard === TypeCard.vertical && (
        <VerticalCard>{children}</VerticalCard>
      )}
      {typeCard === TypeCard.horizontal && (
        <HorizontCard>{children}</HorizontCard>
      )}
    </>
  );
};

export default CardSocial;

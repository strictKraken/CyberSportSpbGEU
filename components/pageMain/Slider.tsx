import { GetServerSideProps } from "next";

type Props = {
  listImage: string[];
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const listImage = [];
  return {
    props: {
      listImage,
    },
  };
};

const Slider: React.FC<Props> = ({ listImage }) => {
  return <></>;
};

export default Slider;

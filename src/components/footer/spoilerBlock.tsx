type Props = {
  isShow: boolean;
  children?: React.ReactNode;
};

const SpoilerBlock = ({ isShow, children }: Props) => {
  return (
    <div
      className={`${isShow ? "h-full" : "h-0"} overflow-hidden
      lg:h-full
    `}
    >
      {children}
    </div>
  );
};

export default SpoilerBlock;

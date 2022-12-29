type Props = {
  isShow: boolean;
  children?: React.ReactNode;
  ref?: any;
};

const SpoilerBlock = ({ isShow, children, ref }: Props) => {
  return (
    <div
      className={`${isShow ? "h-full" : "h-0"} overflow-hidden
      lg:h-full
    `}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default SpoilerBlock;

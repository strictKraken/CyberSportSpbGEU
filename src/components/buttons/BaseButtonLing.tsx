type Props = {
  children: React.ReactNode;
  className?: string;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
};

const BaseButtonLink: React.FC<Props> = ({ className, children }) => {
  return (
    <a
      className={`${className} w-full flex rounded-md items-center justify-center gap-[10px] uppercase 
  bg-purpule text-white py-[16px] text-[15px] hover:bg-transparent border-2 
  border-purpule hover:border-2 hover:border-purpule transition-colors ease-out 
  active:bg-purple-dark active:border-purple-dark`}
    >
      {children}
    </a>
  );
};

export default BaseButtonLink;

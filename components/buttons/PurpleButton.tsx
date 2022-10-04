interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const PurpleButton: React.FC<Props> = ({ children, onClick, className="" }) => {
  return (
    <button
      onClick={onClick}
      className={`${className}  flex rounded-md items-center justify-center gap-[10px] uppercase bg-purpule text-white py-[16px] px-[60px] text-[15px] hover:bg-transparent border-2 border-purpule hover:border-2 hover:border-purpule transition-colors ease-out active:bg-purple-dark active:border-purple-dark`}
    >
      {children}
    </button>
  );
};

export default PurpleButton;

import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
  className?: string;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
};

const PurpleButton: React.FC<Props> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full flex rounded-md items-center justify-center gap-[10px] uppercase 
      bg-purpule text-white py-[16px] text-[15px] hover:bg-transparent border-2 
      border-purpule hover:border-2 hover:border-purpule transition-colors ease-out 
      active:bg-purple-dark active:border-purple-dark`}
    >
      {children}
    </button>
  );
};

export default PurpleButton;

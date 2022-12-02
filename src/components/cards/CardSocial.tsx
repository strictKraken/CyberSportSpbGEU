interface Props {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

const CardSocial: React.FC<Props> = ({ children, title, className }) => {
  return (
    <div
      className={`${className} bg-[#333336] rounded-[10px] p-8 pt-[40px] group flex justify-between`}
    >
      {/* <div className={`${className} bg-[#333336] rounded-[10px] p-8 pt-[40px] group grid`}></div> */}
      <div>
        <div className="max-w-[258px] font-heading text-[24px] leading-[24px] group-hover:text-purpule">
          {title}
        </div>
      </div>
      <div className="group-hover:fill-purpule">{children}</div>
    </div>
  );
};

export default CardSocial;

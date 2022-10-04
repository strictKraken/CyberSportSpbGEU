interface Props {
  children?: React.ReactNode;
  title: string;
  className?: string;
}

const CardSocial: React.FC<Props> = ({children, title, className}) => {
  return (
    <div className={`${className} bg-[#333336] rounded-[10px] flex justify-between flex-wrap p-[32px] pt-[40px] group`}>
      <div>
        <div className="max-w-[258px] font-heading text-[24px] leading-[24px] group-hover:text-purpule"> {title} </div>
      </div>      
      <div className="flex items-center justify-center group-hover:fill-purpule">
        {children}
      </div>
    </div>
  )
}

export default CardSocial;

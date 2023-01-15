export interface ITab {
  id: string;
  name: string;
  isActive?: boolean;
  onClickTab: (id: string) => void;
}

const Tab: React.FC<ITab> = ({ id, name, isActive, onClickTab }: ITab) => {
  return (
    <div className="cursor-pointer" onClick={() => onClickTab(id)}>
      <span
        className={`block relative ${
          isActive &&
          "after:content-[''] after:absolute after:top-[100%] after:left-0 after:w-full after:bg-purpule after:h-[2px]"
        }`}
      >
        {name}
      </span>
    </div>
  );
};

export default Tab;

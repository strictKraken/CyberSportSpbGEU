import { useState } from "react";
import Tab, { ITab } from "./tab";

interface IContainerTabs {
  tabs: string[];
  className?: string;
  children?: React.ReactNode;
  dataList?: any[];
  activeTab?: number;
  onActiveTab: (id: number) => void;
}

const ContainerTabs: React.FC<IContainerTabs> = ({
  children,
  className,
  tabs,
  activeTab = -1,
  onActiveTab,
}) => {
  const [currentActive, setCurrentActive] = useState<number>(activeTab);
  const onClickTab = (tab_idx: number) => {
    setCurrentActive(tab_idx);
    onActiveTab(tab_idx);
  };

  return (
    <div>
      <div className="flex font-heading gap-[40px]">
        {tabs.map((item: string, idx: number) => (
          <Tab
            id={idx}
            onClickTab={(id) => onClickTab(id)}
            key={item}
            name={item}
            isActive={idx === currentActive}
          />
        ))}
      </div>
      <div>{/* content */}</div>
    </div>
  );
};

export default ContainerTabs;

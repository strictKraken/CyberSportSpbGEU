import { useState } from "react";
import Tab, { ITab } from "./tab";

type $Tab = {
  name: string;
  label: string;
};

interface IContainerTabs {
  tabs: $Tab[];
  className?: string;
  children?: any;
  dataList?: any[];
  activeTab?: string;
  onChangeTab?: () => void;
}

export interface IContentTab {
  children?: React.ReactNode;
  className?: string;
  label: string;
}

// export const ContentTab: React.FC<IContentTab> = ({
//   className,
//   children,
//   label,
// }) => {
//   return (
//     <div className={`${className}`} label={label}>
//       {children}
//     </div>
//   );
// };

const ContainerTabs: React.FC<IContainerTabs> = ({
  children,
  className,
  tabs,
  activeTab = children[0].label,
}) => {
  const [currentActive, setCurrentActive] = useState<string>(activeTab);
  const onClickTab = (tab_idx: string) => {
    setCurrentActive(tab_idx);
  };

  return (
    <div>
      <div className="flex font-heading gap-[40px] mb-[30px] md:mb-[60px]">
        {tabs.map((item: $Tab) => (
          <Tab
            id={item.label}
            onClickTab={(id) => onClickTab(id)}
            key={item.label}
            name={item.name}
            isActive={item.label === currentActive}
          />
        ))}
      </div>
      <div>
        {/* content */}
        {children.map((item: any) => {
          if (item.props.label !== currentActive) return undefined;
          return <div key={item.props.label}>{item}</div>;
        })}
      </div>
    </div>
  );
};

export default ContainerTabs;

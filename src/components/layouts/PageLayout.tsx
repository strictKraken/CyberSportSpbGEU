type Props = {
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="mb-[372px] min-h-screen">
      <div className="pt-[84px] md:pt-[116px]">{children}</div>
      <div className="w-full h-[78px] min-h-[78px] bg-gradient-to-b from-shadowFooter bg-transparent" />
    </div>
  );
};

export default PageLayout;

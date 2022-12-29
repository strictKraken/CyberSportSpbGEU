type Props = {
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="pt-[84px] md:pt-[116px] container mx-auto max-w-[1360px] px-5">
        {children}
      </div>
      <div className="w-full h-[78px] min-h-[78px] bg-gradient-to-b from-shadowFooter" />
    </>
  );
};

export default PageLayout;

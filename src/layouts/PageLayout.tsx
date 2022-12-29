type Props = {
  children: React.ReactNode;
};

const PageLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <div className="w-full h-[78px]" />
    </>
  );
};

export default PageLayout;

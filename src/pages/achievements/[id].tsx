// change type
type Props = {
  place?: number;
  game: string;
  title: string;
  date?: string;
};

const Content = () => {
  return (
    <div className="md:flex">
      <div>
        <div className="md:mb-[60px]">
          <h2 className="section-title">{/* game */}</h2>

          <span className="font-heading">{/* date */}</span>
        </div>
        <div>{/* contentHtml */}</div>
      </div>

      <div className="grid grid-cols-2">
        {/* <Image/> */}
        {/* <Image /> */}
        <div>{/* place */}</div>
        {/* <Image /> */}
      </div>
    </div>
  );
};

const AchievementsDetail = () => {
  return (
    <div className="min-h-screen">
      <Content />
    </div>
  );
};

export default AchievementsDetail;

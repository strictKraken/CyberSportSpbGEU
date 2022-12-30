import { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { Teams } from "../../types/globalTypes";

export const getStaticProps: GetStaticProps = async () => {
  const teams: Teams[] = [];
  return {
    props: {
      teams,
    },
  };
};

const SectionTitle = () => {
  return (
    <div className="w-full h-[265px] ">{/* <Image src={} ></Image> */}</div>
  );
};

const TeamBlock = ({ title, members }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {members.map((item) => (
          <>{title}</>
        ))}
      </div>
    </div>
  );
};

const SectionTeams = ({ teams }) => {
  return (
    <>
      {teams?.map((item) => (
        <TeamBlock title={item.title} members={item.members} />
      ))}
    </>
  );
};

const TeamPage: NextPage = ({ teams }) => {
  return (
    <>
      <SectionTeams teams={teams} />
    </>
  );
};

export default TeamPage;

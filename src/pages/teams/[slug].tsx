import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Team } from "../../types/globalTypes";

import data from "../../testData/Teams/dotaTeams.json";
import CardMemberTeam from "../../components/cards/CardMemberTeam";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      teams: data.teams,
    },
  };
};

const TeamBlock: React.FC<Team> = ({ teamName, members }) => {
  return (
    <div
      className="pb-8
      md:pb-[60px]
      "
    >
      <h3
        className="section-title pb-5
        md:pb-[40px]
        "
      >
        {teamName}
      </h3>
      <div className="">
        {members.map((item) => (
          <CardMemberTeam key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const SectionTeams: React.FC<Props> = ({ teams }) => {
  return (
    <div className="container-base">
      {teams?.map((item: Team) => (
        <TeamBlock
          key={item.id}
          id={item.id}
          teamName={item.teamName}
          members={item.members}
        />
      ))}
    </div>
  );
};

const SectionTitle = () => {
  const tmpUrlBanner = "/images/banners/banerDota2.jpg";

  return (
    <div
      className="w-full h-[265px] relative mb-8
      md:mb-[60px]
    "
    >
      <Image src={tmpUrlBanner} layout="fill" objectFit="cover" alt="banner" />
    </div>
  );
};

interface Props {
  teams: Team[];
}
const TeamPage: NextPage<Props> = ({ teams }) => {
  return (
    <div className="h-screen pt-[116px]">
      <SectionTitle />
      <SectionTeams teams={teams} />
    </div>
  );
};

export default TeamPage;

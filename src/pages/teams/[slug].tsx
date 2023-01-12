import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Team } from "../../types/globalTypes";

import CardMemberTeam from "../../components/cards/CardMemberTeam";
import { useQuery } from "react-query";
import { TeamServices } from "../../services/teams";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      teams: [],
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
      <div className="grid grid-cols-2 gap-3 md:grid-cols-news-grid-main md:gap-6">
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
  const router = useRouter();
  const { slug } = router.query;

  const { data: response } = useQuery(
    "teams list",
    () => TeamServices.getAll(slug as string),
    {
      select: ({ data }) =>
        data.data.map((item: any) => {
          return {
            id: item.id,
            ...item.attributes,
            members: [
              ...item.attributes.members.data.map(({ id, attributes }: any) => {
                return { id: id, ...attributes };
              }),
            ],
          };
        }),
    },
  );

  return (
    <div>
      <SectionTitle />
      <SectionTeams teams={response} />
    </div>
  );
};

export default TeamPage;

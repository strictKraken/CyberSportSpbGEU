import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { NewsServices } from "../../services/news";
import useParseMarkDown from "../../hooks/useParseMarkDown";
import convertDate from "../../utils/convertDate";

export const getServerSideProps = (context: any) => {
  // const { id } = context.params;
  return {
    props: {},
  };
};

const BannerImage = () => {
  return <></>;
};

const ContentBlock = ({ title, content, date }: any) => {
  return (
    <section className="container-base py-[60px]">
      <h2 className="section-title">{title}</h2>
      <span className="block mb-[40px] text-lightGray leading-[2em]">
        {date}
      </span>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="[&>p>a]:text-purpule [&>p>a]:underline leading-[2em]"
      />
    </section>
  );
};

const DetailEvent: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: response, isLoading } = useQuery(
    ["detail-post", id],
    () => NewsServices.getPostNews(id),
    {
      select: ({ data }: any) => {
        return {
          id: data.data.id,
          ...data.data.attributes,
          date: convertDate(data.data.attributes.publishedAt),
        };
      },
    },
  );
  const { contentHtml } = useParseMarkDown(response?.content);

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen" />
      ) : (
        <ContentBlock
          title={response.title}
          content={contentHtml}
          date={response.date}
        />
      )}
    </>
  );
};

export default DetailEvent;

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { NewsServices } from "../../services/news";
import { remark } from "remark";
import html from "remark-html";
import { useState } from "react";
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
  console.log(content);

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

export interface IDetailEvent {
  // id: string;
}

const DetailEvent: NextPage<IDetailEvent> = () => {
  const [isLoadMD, setIsLoadMD] = useState<Boolean>(true);
  const [contentHtml, setContentHtml] = useState<string>();
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

  if (isLoading) return <div className="min-h-screen" />;
  // parse markdown
  (async () => {
    const processedContent = await remark().use(html).process(response.content);
    setContentHtml(processedContent.toString());
  })();
  return (
    <>
      {isLoading && isLoadMD ? (
        <></>
      ) : (
        <ContentBlock
          title={response.title}
          content={contentHtml}
          date={"Сентябрь 2022"}
        />
      )}
    </>
  );
};

export default DetailEvent;

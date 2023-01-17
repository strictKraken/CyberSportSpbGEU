import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import CardNews from "../../components/cards/CardNews";
import convertDate from "../../utils/convertDate";
import { NewsServices } from "../../services/news";
import Pagination from "../../components/pagination";

type ContentT = {
  content?: string;
  filter: string;
  pageSize: number;
  stylesContentContainer?: string;
};

const ContentTab: React.FC<ContentT> = ({
  content,
  filter,
  pageSize,
  stylesContentContainer,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: response,
    isLoading,
    isFetched,
  } = useQuery(
    [content, currentPage],
    () => NewsServices.getPosts(filter, currentPage, pageSize),
    {
      select: ({ data }) => {
        return {
          ...data.meta,
          data: data.data.map((item: any) => {
            return {
              id: item.id,
              ...item.attributes,
              date: convertDate(item.attributes.publishedAt),
              img: item.attributes.preview_img.data?.attributes.url ?? "",
            };
          }),
        };
      },
      keepPreviousData: true,
    },
  );

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scroll(0, 0);
  };

  return isLoading ? (
    <></>
  ) : (
    <div>
      <div className={`${stylesContentContainer} mb-[30px] md:mb-[60px]`}>
        {response?.data.map((item: any) => (
          <CardNews
            key={item.id}
            id={item.id}
            title={item.title}
            subTitle={item.date}
            imageUrl={`${process.env.NEXT_PUBLIC_BASE_URL}${item.img}`}
            url={item.img}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          pageCount={response?.pagination.pageCount}
          // pageCount={10}
          total={response?.pagination.total}
          onChange={onPageChange}
          pageSize={response?.pagination.pageSize}
        />
      </div>
    </div>
  );
};

export default ContentTab;

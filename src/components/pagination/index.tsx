interface IPagination {
  currentPage: number;
  pageSize: number;
  pageCount: number;
  total: number;
  maxRange?: number;
  onChange: (id: number) => void;
}

const ItemPagination = ({ isActive, item }: any) => {
  return (
    <div>
      <span className={`${isActive && "text-purpule"}`}>{item}</span>
    </div>
  );
};

const Pagination: React.FC<IPagination> = ({
  currentPage,
  pageSize,
  pageCount,
  total,
  maxRange = 2,
  onChange,
}) => {
  const toShowPages = 5;

  const onClickPrevBtn = (currentPage: number) => {
    if (currentPage <= 1) return;
    onChange(--currentPage);
    return;
  };

  const onClickNextBtn = (currentPage: number) => {
    if (currentPage >= pageCount) return;
    onChange(++currentPage);
    return;
  };

  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const renderPages = (): number[] => {
    const totalPageNumbers = maxRange + toShowPages;

    const leftRangeIndex = Math.max(currentPage - maxRange, 1);
    const rightRangeIndex = Math.min(currentPage + maxRange, pageCount);

    // if (totalPageNumbers >= pageCount) {
    //   return range();
    // }

    return range(leftRangeIndex, rightRangeIndex);
  };

  return (
    <div>
      <div className="flex">
        <button
          onClick={() => onClickPrevBtn(currentPage)}
          className="bg-transparent mr-8
          group"
        >
          <span className="group-hover:[&>svg>path]:fill-purpule">
            <svg
              className=""
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z" fill="white" />
            </svg>
          </span>
        </button>

        <div className="flex gap-5">
          {renderPages().map((item: number) => (
            <button
              onClick={() => onChange(item)}
              key={item}
              className={`bg-transparent ${
                item === currentPage && "text-purpule text-[16px]"
              }`}
            >
              <span>{item}</span>
            </button>
          ))}
        </div>
        <button
          onClick={() => onClickNextBtn(currentPage)}
          className="bg-transparent ml-8 group"
        >
          <span className="group-hover:[&>svg>path]:fill-purpule">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.74846e-07 12L5 7L1.04907e-06 2L1 -6.11959e-07L8 7L1 14L1.74846e-07 12Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

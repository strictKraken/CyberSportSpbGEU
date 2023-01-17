interface IPagination {
  currentPage: number;
  pageSize?: number;
  pageCount?: 1;
  totalPages: number;
  maxRange?: number;
  onChange?: () => void;
}

const ItemPagination = ({ isActive }: any) => {
  return (
    <div>
      <span></span>
    </div>
  );
};

const Pagination: React.FC<IPagination> = ({
  currentPage,
  pageSize,
  pageCount,
  totalPages,
  maxRange = 2,
}) => {
  return <div></div>;
};

export default Pagination;

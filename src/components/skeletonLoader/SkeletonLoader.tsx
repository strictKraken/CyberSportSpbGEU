import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeletion.css";

const SkeletonLoader: React.FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <Skeleton
      {...rest}
      baseColor=""
      highlightColor=""
      className={`${className}`}
    ></Skeleton>
  );
};

export default SkeletonLoader;

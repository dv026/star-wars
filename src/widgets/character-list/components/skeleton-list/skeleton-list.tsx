import { Skeleton } from "antd";

import { itemsOnPage } from "../../constants";
import { styles } from "./styles";

export const SkeletonList = () => {
  const renderSkeletonList = () => {
    const skeletons = [];
    for (let i = 0; i < itemsOnPage; i++) {
      skeletons.push(<Skeleton key={i} css={styles.skeleton} />);
    }

    return skeletons;
  };

  return renderSkeletonList();
};

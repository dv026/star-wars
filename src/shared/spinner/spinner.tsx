import { Spin } from "antd";
import { FC } from "react";

import { styles } from "./styles";

interface SpinnerProps {
  show: boolean;
}

export const Spinner: FC<SpinnerProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div css={styles.spinner}>
      <Spin />
    </div>
  );
};

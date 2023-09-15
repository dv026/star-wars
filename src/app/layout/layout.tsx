import { FC, PropsWithChildren } from "react";

import { styles } from "./styles";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <div css={styles.layout}>{children}</div>;
};

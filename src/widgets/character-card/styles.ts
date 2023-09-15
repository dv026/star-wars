import { css } from "@emotion/react";

import { cardWidth } from "../../app/constants";

export const styles = {
  card: css`
    width: ${cardWidth};
    height: 230px;
  `,

  link: css`
    text-decoration: none;
    cursor: pointer;
  `,
};

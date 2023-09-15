import { css } from "@emotion/react";

import { cardWidth } from "../../app/constants";

export const styles = {
  list: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, ${cardWidth});
    justify-content: space-between;
    gap: 20px;
  `,

  container: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  pagination: css`
    text-align: center;
  `,
};

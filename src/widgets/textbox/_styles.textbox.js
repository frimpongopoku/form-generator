import { css } from "@emotion/css";
import { THEME_COLOR } from "../shared/_shared.styles";
export const input = css`
  margin: 10px;
  padding: 15px;
  font-size: 18px;
  border: solid 1px ${THEME_COLOR};
  width: 600px;
  border-left-width: 5px;
  &:focus {
    outline: 0;
  }
`;

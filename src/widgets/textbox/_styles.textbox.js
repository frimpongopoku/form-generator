import { css } from "@emotion/css";
import { theme_color } from "../shared/_shared.styles";
export const input = css`
  margin: 10px;
  padding: 15px;
  font-size: 18px;
  border: solid 1px ${theme_color};
  width: 600px;
  border-left-width: 5px;
  &:focus {
    outline: 0;
  }
`;

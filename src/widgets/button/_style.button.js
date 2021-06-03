import { css } from "@emotion/css";
import { theme_active, theme_hover } from "../shared/_shared.styles";

export const remove_defaults = css`
  padding: 10px 15px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  border: 0px;
  background: transparent;
  &:focus {
    outline: 0;
  }
`;

export const default_btn = css`
  padding: 10px 20px;
  background: purple;
  color: white;
  border-radius: 4px;
  &:hover {
    background: ${theme_hover};
    transition: 0.2s ease-out;
  }
  &:active {
    background: ${theme_active};
    transition: 0.2s ease-out;
  }
`;

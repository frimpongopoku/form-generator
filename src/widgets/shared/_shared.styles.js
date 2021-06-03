import { css } from "@emotion/css";
export const theme_color = "purple";
export const theme_hover ="#9d41c3";
export const theme_active ="#531a6b";

const z_depth_half = css`
  box-shadow: 0 1px 0px 0 rgb(0 0 0 / 0%), 0 2px 4px 0 rgb(0 0 0 / 3%);
`;

const z_depth_1 = css`
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;
`;

const z_depth_1_half = css`
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
`;

const z_depth_2 = css`
  -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const z_depth_3 = css`
  -webkit-box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`;
const z_depth_4 = css`
  -webkit-box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22),
    0 25px 55px 0 rgba(0, 0, 0, 0.21);
  box-shadow: 0 16px 28px 0 rgba(0, 0, 0, 0.22),
    0 25px 55px 0 rgba(0, 0, 0, 0.21);
`;

const z_depth_5 = css`
  -webkit-box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
    0 40px 77px 0 rgba(0, 0, 0, 0.22) !important;
  box-shadow: 0 27px 24px 0 rgba(0, 0, 0, 0.2),
    0 40px 77px 0 rgba(0, 0, 0, 0.22) !important;
`;
const z_depth_float = css`
 .z-depth-float 
  box-shadow: 0 1px 0px 0 rgba(0, 0, 0, -1.84), 0 2px 10px 0 rgba(0, 0, 0, 0.1) !important;
  -webkit-box-shadow: 0 1px 0px 0 rgba(0, 0, 0, -1.84),
    0 2px 10px 0 rgba(0, 0, 0, 0.1) !important;

`;
/**
 * The integer value provided resolves to a corresponding cass class that will give a box shadow to an element
 * @param {Number} depth
 * @returns
 */
export const performElevation = (depth) => {
  const arr = [
    z_depth_half,
    z_depth_float,
    z_depth_1,
    z_depth_1_half,
    z_depth_2,
    z_depth_3,
    z_depth_4,
    z_depth_5,
  ];
  if (depth > arr.length) return arr[arr.length - 1];
  if (depth < 0) return arr[0];
  return arr[depth];
};

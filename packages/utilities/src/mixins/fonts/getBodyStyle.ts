import { CSSProp, css } from 'styled-components';
import {
  FONT_POPPINS,
  LINE_HEIGHT_PRIMARY,
} from '@ammc/commons/constants/fonts';

import rem from './rem';

/**
 * style font to Body
 *
 * @description mixin to return Body style
 */
export default function getBodyStyle(): CSSProp {
  return css`
    font-family: ${FONT_POPPINS};
    font-size: clamp(${rem('16')}, 1vw, ${rem('32')});
    letter-spacing: 0.5%;
    line-height: ${LINE_HEIGHT_PRIMARY};
  `;
}

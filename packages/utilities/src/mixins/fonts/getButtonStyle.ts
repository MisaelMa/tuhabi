import { CSSProp, css } from 'styled-components';
import {
  FONT_POPPINS,
  LINE_HEIGHT_PRIMARY,
} from '@ammc/commons/constants/fonts';

import media from '../media';
import rem from './rem';

/**
 * style font to buttons
 *
 * @description mixin to return Button style
 */
export default function getButtonStyle(): CSSProp {
  return css`
    font-family: ${FONT_POPPINS};
    font-size: clamp(${rem('16')}, 1vw, ${rem('32')});
    font-weight: 700;
    letter-spacing: 0;
    line-height: ${LINE_HEIGHT_PRIMARY};

    ${media.md`
      font-size: clamp(${rem('20')}, 1.2vw, ${rem('52')});
      letter-spacing: 0;
    `}
  `;
}

import { CSSProp, css } from 'styled-components';
import {
  FONT_ROBOTO,
  LINE_HEIGHT_PRIMARY,
} from '@ammc/commons/constants/fonts';

import media from '@ammc/utilities/src/mixins/media';
import rem from '@ammc/utilities/src/mixins/fonts/rem';

/**
 * font style to Title
 *
 * @description mixin to return Title style
 */
export default function getTitleStyle(): CSSProp {
  return css`
    font-family: ${FONT_ROBOTO};
    font-size: clamp(${rem('26')}, 1.4vw, ${rem('32')});
    font-weight: 700;
    letter-spacing: 0;
    line-height: ${LINE_HEIGHT_PRIMARY};

    ${media.md`
      font-size: clamp(${rem('42')}, 2.9vw, ${rem('52')});
      letter-spacing: -1%;
    `}

    ${media.lg`
      font-size: clamp(${rem('68')}, 4.2vw, ${rem('88')});
      letter-spacing: -1.5%;
    `};
  `;
}

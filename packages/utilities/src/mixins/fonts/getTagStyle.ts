import { CSSProp, css } from 'styled-components';
import {
  FONT_ROBOTO,
  LINE_HEIGHT_SECONDARY,
} from '@ammc/commons/constants/fonts';

import rem from '@ammc/utilities/src/mixins/fonts/rem';

/**
 * style font to tag
 *
 * @description mixin to return tag style
 */
export default function getTagStyle(): CSSProp {
  return css`
    font-family: ${FONT_ROBOTO};
    font-size: clamp(${rem('12')}, 0.8vw, ${rem('32')});
    letter-spacing: 3%;
    line-height: ${LINE_HEIGHT_SECONDARY};
  `;
}

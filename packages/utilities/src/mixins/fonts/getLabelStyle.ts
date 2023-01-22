import { CSSProp, css } from 'styled-components';
import {
  FONT_ROBOTO,
  LINE_HEIGHT_SECONDARY,
} from '@ammc/commons/constants/fonts';

import rem from '@ammc/utilities/src/mixins/fonts/rem';

/**
 * style font to Label
 *
 * @description mixin to return Label style
 */
export default function getLabelStyle(): CSSProp {
  return css`
    font-family: ${FONT_ROBOTO};
    font-size: clamp(${rem('14')}, 0.9vw, ${rem('32')});
    letter-spacing: -1.5%;
    line-height: ${LINE_HEIGHT_SECONDARY};
  `;
}

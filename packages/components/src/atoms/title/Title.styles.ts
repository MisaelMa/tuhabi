import { SPRING_GREEN, WOOD_SMOKE } from '@ammc/commons/constants/colors';

import { css } from 'styled-components';
import getTitleStyle from '@ammc/utilities/mixins/fonts/getTitleStyle';

export const styles = {
  wrapper: css`
    ${getTitleStyle};
    color: ${WOOD_SMOKE};
    display: inline-flex;
    justify-content: center;
    margin: 8px 0;
    padding: 0 16px;
    position: relative;

    &:after {
      background-color: ${SPRING_GREEN};
      bottom: 0;
      content: '';
      display: block;
      height: 15px;
      position: absolute;
      width: 100%;
      z-index: -1;
    }
  `,
};

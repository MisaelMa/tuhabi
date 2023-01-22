import { FUN_GREEN } from '@ammc/commons/constants/colors';
import { SPACES } from '@ammc/commons/constants/spaces';
import { css } from 'styled-components';
import getTagStyle from '@ammc/utilities/mixins/fonts/getTagStyle';

export const styles = {
  container: css`
    ${getTagStyle};
    align-items: center;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    padding: ${SPACES.xxsm}px ${SPACES.xsm}px;
    position: relative;
    text-decoration: none;
  `,
  wrapper: css`
    align-items: center;
    color: ${FUN_GREEN};
    display: flex;
  `,
};

import { css, FlattenSimpleInterpolation } from 'styled-components';

import { BLACK_HAZE, SPRING_GREEN } from '@ammc/commons/constants/colors';
import getLabelStyle from '@ammc/utilities/mixins/fonts/getLabelStyle';
import rem from '@ammc/utilities/mixins/fonts/rem';
import { SPACES } from '@ammc/commons/constants/spaces';

import ISpacesProps from './ISpaces';

export const styles = {
  container: css`
    ${getLabelStyle};
    align-items: center;
    border-bottom: 1px solid ${BLACK_HAZE};
    box-sizing: border-box;
    display: flex;
    height: 70px;
    margin: 10px 0;
    padding: 10px 0px 10px 10px;
    width: 100%;
  `,
  numbers: css`
    font-size: ${rem('16px')};
    margin-right: ${SPACES.xxsm};
    width: 100px;
  `,
  /**
   * spaceBox style
   *
   * @param param space width
   * @param [param.width = SPACES.xxsm] - box space width
   */
  spaceBox: ({
    width = SPACES.xxsm,
  }: ISpacesProps): FlattenSimpleInterpolation => css`
    background-color: ${SPRING_GREEN};
    height: 100%;
    width: ${width}px;
  `,

  title: css`
    font-size: ${rem('14px')};
    font-weight: 700;
    margin-right: ${SPACES.xxsm};
    width: 140px;
  `,
  wrapper: css`
    width: 100%;
  `,
};

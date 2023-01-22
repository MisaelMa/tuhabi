import {
  DESERT_STORM,
  SILVER_SAND,
} from '@ammc/commons/constants/colors';
import { FlattenSimpleInterpolation, css } from 'styled-components';

import IColorsProps from './IColors';
import getLabelStyle from '@ammc/utilities/mixins/fonts/getLabelStyle';
import rem from '@ammc/utilities/mixins/fonts/rem';

export const styles = {
  card: css`
    background-color: ${DESERT_STORM};
    border: solid 1px ${SILVER_SAND};
    border-radius: ${rem('15px')};
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    justify-content: center;
    margin: 0 16px 16px 0;
    width: 200px;
  `,
  /**
   * colorBox style
   *
   * @param param color box options
   * @param [param.backgroundColor = SILVER_SAND] - background color
   */
  colorBox: ({
    backgroundColor = SILVER_SAND,
  }: IColorsProps): FlattenSimpleInterpolation => css`
    background-color: ${backgroundColor};
    border-radius: 15px 15px 0 0;
    height: 100px;
    width: 100%;
  `,
  /**
   * colorText style
   *
   * @param param color text options
   * @param [param.isBold] - set color text as bold
   */
  colorText: ({ isBold }: IColorsProps): FlattenSimpleInterpolation => css`
    display: block;
    font-size: ${rem('14px')};
    text-align: center;
    width: 100%;

    ${isBold &&
    css`
      font-weight: 700;
    `}
  `,
  container: css`
    ${getLabelStyle};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `,
};

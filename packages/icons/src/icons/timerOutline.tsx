import React from 'react';

import { BLACK } from '@ammc/commons/constants/colors';

import {
  HEIGHT_SIZE_DEFAULT,
  VIEWBOX_DEFAULT,
  WIDTH_SIZE_DEFAULT,
} from '../constants/iconSize';
import { Path, Svg } from '../components/Svg/svgWithProps';
import IIconProps from '../components/Icon/IIcon';

/**
 * timerOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const timerOutline = ({
  className,
  fill = BLACK,
  height = WIDTH_SIZE_DEFAULT,
  style,
  viewBox = VIEWBOX_DEFAULT,
  width = HEIGHT_SIZE_DEFAULT,
}: IIconProps): JSX.Element => {
  return (
    <Svg
      className={className}
      fill={fill}
      height={height}
      style={style}
      viewBox={viewBox}
      width={width}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M104 0a8 8 0 1 0 0 16h48a8 8 0 0 0 0-16h-48Zm24 48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80Zm-96 80c0-53.02 42.98-96 96-96 53.019 0 96 42.98 96 96 0 53.019-42.981 96-96 96-53.02 0-96-42.981-96-96Zm141.257-45.257a8 8 0 0 1 0 11.314l-39.6 39.6a8 8 0 0 1-11.314-11.314l39.6-39.6a8 8 0 0 1 11.314 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export default timerOutline;

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
 * arrowsLeftRight component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowsLeftRight = ({
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
        d="m213.7 181.7-32 32a8.3 8.3 0 0 1-5.7 2.3 8.504 8.504 0 0 1-3.1-.6 7.998 7.998 0 0 1-4.9-7.4v-24H48a8.001 8.001 0 0 1 0-16h120v-24a8.002 8.002 0 0 1 4.9-7.4 8.403 8.403 0 0 1 8.8 1.7l32 32a8.101 8.101 0 0 1 0 11.4Zm-139.4-64A8.3 8.3 0 0 0 80 120a8.505 8.505 0 0 0 3.1-.6A7.999 7.999 0 0 0 88 112V88h120a8 8 0 1 0 0-16H88V48a8.001 8.001 0 0 0-4.9-7.4 8.4 8.4 0 0 0-8.8 1.7l-32 32a8.1 8.1 0 0 0 0 11.4l32 32Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowsLeftRight;

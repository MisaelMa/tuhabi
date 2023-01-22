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
 * userOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const userOutline = ({
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
        d="M72 96c0-30.928 25.072-56 56-56s56 25.072 56 56c0 30.649-24.621 55.547-55.164 55.994a116.277 116.277 0 0 0-1.672 0C96.621 151.547 72 126.649 72 96Zm19.064 61.817C70.06 145.24 56 122.262 56 96c0-39.764 32.236-72 72-72s72 32.236 72 72c0 26.262-14.06 49.24-35.064 61.817a120.008 120.008 0 0 1 66.993 54.184 8 8 0 0 1-2.93 10.927 8 8 0 0 1-10.928-2.929 103.994 103.994 0 0 0-89.189-52.004 86.278 86.278 0 0 1-1.764 0 103.997 103.997 0 0 0-89.19 52.004 8 8 0 0 1-10.927 2.929 7.999 7.999 0 0 1-2.93-10.927 120 120 0 0 1 66.993-54.184Z"
        fill={fill}
      />
    </Svg>
  );
};

export default userOutline;

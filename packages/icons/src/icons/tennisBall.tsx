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
 * tennisBall component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const tennisBall = ({
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
        d="M224 136h3.3a4 4 0 0 1 3.9 4.5 104.197 104.197 0 0 1-94.8 91.1A87.998 87.998 0 0 1 224 136Zm-73.5 14.5A102.907 102.907 0 0 1 224 120h3.1a4.008 4.008 0 0 0 3.047-1.271 4.007 4.007 0 0 0 1.053-3.129 104.1 104.1 0 0 0-90.9-90.9 3.998 3.998 0 0 0-4.4 4.1 103.698 103.698 0 0 1-30.4 76.7A102.906 102.906 0 0 1 32 136h-3.1a4.002 4.002 0 0 0-4.1 4.4 104.097 104.097 0 0 0 90.9 90.9 3.999 3.999 0 0 0 4.4-4.1 103.696 103.696 0 0 1 30.4-76.7ZM94.2 94.2a87.595 87.595 0 0 0 25.7-65.7 4 4 0 0 0-4.5-3.7 104 104 0 0 0-90.6 90.6 4.001 4.001 0 0 0 3.8 4.5 87.81 87.81 0 0 0 65.6-25.7Z"
        fill={fill}
      />
    </Svg>
  );
};

export default tennisBall;

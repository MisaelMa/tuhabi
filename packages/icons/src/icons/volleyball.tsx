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
 * volleyball component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const volleyball = ({
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
        d="M232 127.6a103.99 103.99 0 0 0-40.948-82.248A103.999 103.999 0 0 0 37.9 180c2 3.4 4.2 6.7 6.5 9.9l.5.7a103.903 103.903 0 0 0 144.811 21.118A103.907 103.907 0 0 0 223.1 169.9c.4-.617.704-1.291.9-2a105.703 105.703 0 0 0 8-39.3v-1ZM44.5 155.9a88.2 88.2 0 0 1 32.8-99.8l17.1 29.7a104.396 104.396 0 0 0-49.9 70.1Zm32.8 44a84.203 84.203 0 0 1-18.4-17.4 88.002 88.002 0 0 1 43.5-82.9l16.4 28.4-41.5 71.9Zm132.4-39.3a88.197 88.197 0 0 1-93.5 3.8l16.4-28.4h83a89.29 89.29 0 0 1-5.9 24.6ZM181.4 120a105.004 105.004 0 0 0-35.7-78.2 87.902 87.902 0 0 1 69.9 78.2h-34.2Z"
        fill={fill}
      />
    </Svg>
  );
};

export default volleyball;

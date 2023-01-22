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
 * houseOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const houseOutline = ({
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
        d="M117.212 30.987a16 16 0 0 1 21.576 0l.012.01 79.98 72.682.113.105a16.297 16.297 0 0 1 5.106 11.587l.001.129V208c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 208 224h-48a16.004 16.004 0 0 1-11.314-4.686A16.004 16.004 0 0 1 144 208v-48h-32v48c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 96 224H48a16.002 16.002 0 0 1-16-16v-92.5l.001-.129a16.3 16.3 0 0 1 5.106-11.587l.113-.105 79.98-72.682.012-.01Zm-69.136 84.447 79.904-72.613.02-.018.02.018 79.904 72.613a.3.3 0 0 1 .076.175V208h-48v-48c0-4.243-1.686-8.313-4.686-11.314A16.004 16.004 0 0 0 144 144h-32a16.001 16.001 0 0 0-16 16v48H48v-92.391a.306.306 0 0 1 .076-.175Z"
        fill={fill}
      />
    </Svg>
  );
};

export default houseOutline;

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
 * arrowsOutSimple component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowsOutSimple = ({
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
        d="M216 48v48a8 8 0 0 1-4.9 7.4 8.504 8.504 0 0 1-3.1.6 8.3 8.3 0 0 1-5.7-2.3L184 83.3l-26.3 26.4a8.198 8.198 0 0 1-11.4 0 8.101 8.101 0 0 1 0-11.4L172.7 72l-18.4-18.3a8.404 8.404 0 0 1-1.7-8.8A7.999 7.999 0 0 1 160 40h48a8 8 0 0 1 8 8ZM98.3 146.3 72 172.7l-18.3-18.4a8.404 8.404 0 0 0-8.8-1.7A7.998 7.998 0 0 0 40 160v48a8 8 0 0 0 8 8h48a8 8 0 0 0 7.4-4.9 8.403 8.403 0 0 0-1.7-8.8L83.3 184l26.4-26.3a8.097 8.097 0 0 0-.534-10.866A8.1 8.1 0 0 0 98.3 146.3Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowsOutSimple;

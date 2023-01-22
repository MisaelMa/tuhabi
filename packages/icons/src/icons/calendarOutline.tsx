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
 * calendarOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const calendarOutline = ({
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
        d="M184 24a8 8 0 0 0-16 0v8H88v-8a8 8 0 1 0-16 0v8H48c-8.837 0-16 7.163-16 16v160c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16h-24v-8Zm24 24h-24v8a8 8 0 0 1-16 0v-8H88v8a8 8 0 1 1-16 0v-8H48v32h160V48ZM48 96h160v112H48V96Zm36 32a8 8 0 0 1 8-8h28a8 8 0 0 1 6.247 12.998l-8.855 11.068a23.998 23.998 0 0 1-8.694 43.475 24.004 24.004 0 0 1-21.662-6.591 8 8 0 0 1 11.328-11.3 8.003 8.003 0 0 0 13.055-2.59 7.995 7.995 0 0 0-.744-7.511 8.003 8.003 0 0 0-6.661-3.549 8.002 8.002 0 0 1-6.26-12.998l5.601-7.002H92a8 8 0 0 1-8-8Zm84 0a8 8 0 0 0-12.8-6.4l-16 12a8 8 0 0 0-1.6 11.2 8 8 0 0 0 11.2 1.6l3.2-2.4v36a8 8 0 0 0 16 0v-52Z"
        fill={fill}
      />
    </Svg>
  );
};

export default calendarOutline;

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
 * calendarBlankOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const calendarBlankOutline = ({
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
        d="M184 24a8 8 0 0 0-16 0v8H88v-8a8 8 0 1 0-16 0v8H48c-8.837 0-16 7.163-16 16v160c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16h-24v-8Zm24 56V48h-24v8a8 8 0 0 1-16 0v-8H88v8a8 8 0 1 1-16 0v-8H48v32h160ZM48 96h160v112H48V96Z"
        fill={fill}
      />
    </Svg>
  );
};

export default calendarBlankOutline;

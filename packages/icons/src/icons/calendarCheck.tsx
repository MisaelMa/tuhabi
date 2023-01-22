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
 * calendarCheck component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const calendarCheck = ({
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
        d="M208 32h-24v-8a8.001 8.001 0 0 0-13.657-5.657A8.001 8.001 0 0 0 168 24v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16.002 16.002 0 0 0 16 16h160c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V48a16.002 16.002 0 0 0-16-16Zm-38.5 101.8-46.7 44a7.7 7.7 0 0 1-5.5 2.2 7.9 7.9 0 0 1-5.5-2.2l-25.3-24a7.998 7.998 0 0 1 2.079-13.369 7.991 7.991 0 0 1 6.276-.036A7.994 7.994 0 0 1 97.5 142.2l19.8 18.8 41.2-38.8a7.901 7.901 0 0 1 11.3.3 7.997 7.997 0 0 1-.3 11.3ZM208 80H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8.001 8.001 0 0 0 13.657 5.657A8.001 8.001 0 0 0 184 56v-8h24v32Z"
        fill={fill}
      />
    </Svg>
  );
};

export default calendarCheck;

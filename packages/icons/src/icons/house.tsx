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
 * house component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const house = ({
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
        d="m218.8 103.7-80-72.7a15.998 15.998 0 0 0-21.6 0l-80 72.7a16.01 16.01 0 0 0-5.2 11.8v92.1a16.4 16.4 0 0 0 4 11 15.902 15.902 0 0 0 12 5.4h48a8 8 0 0 0 8-8v-48a8.002 8.002 0 0 1 8-8h32a8 8 0 0 1 8 8v48a8 8 0 0 0 8 8h48c2.654.024 5.27-.63 7.6-1.9A16.099 16.099 0 0 0 224 208v-92.5a16.01 16.01 0 0 0-1.358-6.447 16.022 16.022 0 0 0-3.842-5.353Z"
        fill={fill}
      />
    </Svg>
  );
};

export default house;

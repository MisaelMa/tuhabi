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
 * slidersHorizontalOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const slidersHorizontalOutline = ({
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
        d="M92 84c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12-12-5.373-12-12Zm-14.84-8H40a8 8 0 1 0 0 16h37.16c3.442 11.566 14.156 20 26.84 20s23.398-8.434 26.84-20H216a8 8 0 0 0 0-16h-85.16c-3.442-11.566-14.156-20-26.84-20s-23.398 8.434-26.84 20ZM168 160c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12Zm-128 4h101.16c3.442-11.566 14.156-20 26.84-20s23.398 8.434 26.84 20H216a8 8 0 0 1 0 16h-21.16c-3.442 11.566-14.156 20-26.84 20s-23.398-8.434-26.84-20H40a8 8 0 0 1 0-16Z"
        fill={fill}
      />
    </Svg>
  );
};

export default slidersHorizontalOutline;

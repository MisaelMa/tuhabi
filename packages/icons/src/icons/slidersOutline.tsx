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
 * slidersOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const slidersOutline = ({
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
        d="M128 32a8 8 0 0 1 8 8v21.16c11.566 3.442 20 14.156 20 26.84s-8.434 23.398-20 26.84V216a8 8 0 0 1-16 0V114.84c-11.566-3.442-20-14.156-20-26.84s8.434-23.398 20-26.84V40a8 8 0 0 1 8-8Zm0 68c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm84 68c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12Zm-4-128v101.16c11.566 3.442 20 14.156 20 26.84s-8.434 23.398-20 26.84V216a8 8 0 0 1-16 0v-21.16c-11.566-3.442-20-14.156-20-26.84s8.434-23.398 20-26.84V40a8 8 0 0 1 16 0ZM56 148c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12Zm8-38.84V40a8 8 0 1 0-16 0v69.16c-11.566 3.442-20 14.156-20 26.84s8.434 23.398 20 26.84V216a8 8 0 0 0 16 0v-53.16c11.566-3.442 20-14.156 20-26.84s-8.434-23.398-20-26.84Z"
        fill={fill}
      />
    </Svg>
  );
};

export default slidersOutline;

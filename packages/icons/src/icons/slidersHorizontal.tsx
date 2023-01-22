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
 * slidersHorizontal component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const slidersHorizontal = ({
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
        d="M77.2 92H40a8 8 0 0 1 0-16h37.2a28 28 0 0 1 53.6 0H216a8 8 0 1 1 0 16h-85.2a28 28 0 0 1-53.6 0Zm117.6 72H216a8 8 0 1 1 0 16h-21.2a27.998 27.998 0 0 1-43.487 14.375A27.998 27.998 0 0 1 141.2 180H40a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 40 164h101.2a27.998 27.998 0 0 1 43.487-14.375A27.998 27.998 0 0 1 194.8 164Z"
        fill={fill}
      />
    </Svg>
  );
};

export default slidersHorizontal;

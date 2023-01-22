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
 * arrowCircleLeft component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowCircleLeft = ({
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
        d="M128 24a104 104 0 1 0 104 104A104.202 104.202 0 0 0 128 24Zm40 112h-60.7l20.3 20.3a8.001 8.001 0 0 1 0 11.3 7.802 7.802 0 0 1-5.7 2.3 7.607 7.607 0 0 1-5.6-2.3l-33.9-33.9a8.702 8.702 0 0 1-1.8-2.6 8.3 8.3 0 0 1 0-6.2 8.702 8.702 0 0 1 1.8-2.6l33.9-33.9a8.002 8.002 0 0 1 13.369 5.731A7.997 7.997 0 0 1 127.6 99.7L107.3 120H168a8 8 0 1 1 0 16Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowCircleLeft;

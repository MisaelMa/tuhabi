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
 * closedCaptioningOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const closedCaptioningOutline = ({
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
        d="M24 56c0-8.837 7.163-16 16-16h176c8.837 0 16 7.163 16 16v144c0 8.837-7.163 16-16 16H40c-8.837 0-16-7.163-16-16V56Zm192 0H40v144h176V56Zm-115.947 52.414A20.002 20.002 0 0 0 76.003 128a20 20 0 0 0 34.284 14 8 8 0 0 1 11.426 11.2 36.001 36.001 0 1 1 0-50.4 8 8 0 0 1-11.426 11.2 20 20 0 0 0-10.234-5.586Zm72 0A20 20 0 1 0 182.287 142a8 8 0 0 1 11.426 11.2 36.001 36.001 0 1 1 0-50.4 8 8 0 0 1-11.426 11.2 20 20 0 0 0-10.234-5.586Z"
        fill={fill}
      />
    </Svg>
  );
};

export default closedCaptioningOutline;

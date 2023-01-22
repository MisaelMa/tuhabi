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
 * closedCaptioningSlash component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const closedCaptioningSlash = ({
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
        d="M50.619 34.08a8 8 0 0 1 11.3.539l160.001 176a8 8 0 0 1-.539 11.301 7.998 7.998 0 0 1-11.3-.539L205.188 216H40a16.002 16.002 0 0 1-16-16V56a16 16 0 0 1 16-16h8a7.98 7.98 0 0 1 2.619-5.92Zm41.988 58.08 21.663 23.83a8.005 8.005 0 0 1-3.97-1.99 19.797 19.797 0 0 0-14.3-6 19.999 19.999 0 1 0 0 40 19.793 19.793 0 0 0 14.3-6 8.002 8.002 0 0 1 11.4 11.2A35.399 35.399 0 0 1 96 164a36.001 36.001 0 0 1-3.393-71.84Z"
      />
      <Path
        d="M153.858 113.858a20.055 20.055 0 0 0-1.578 1.778l26.623 29.159A19.885 19.885 0 0 0 182.3 142a8 8 0 0 1 11.4 11.2 35.467 35.467 0 0 1-3.926 3.501l41.997 45.997c.152-.885.229-1.788.229-2.698V56a16.002 16.002 0 0 0-16-16H83.22l58.19 63.731A36.002 36.002 0 0 1 168 92a35.402 35.402 0 0 1 25.7 10.8 8.002 8.002 0 0 1-5.848 13.323A8.004 8.004 0 0 1 182.3 114a19.797 19.797 0 0 0-14.3-6 20 20 0 0 0-14.142 5.858Z"
        fill={fill}
      />
    </Svg>
  );
};

export default closedCaptioningSlash;

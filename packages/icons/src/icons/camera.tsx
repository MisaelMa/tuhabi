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
 * camera component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const camera = ({
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
        d="M208 56h-27.7l-13.6-20.4A7.904 7.904 0 0 0 160 32H96a7.9 7.9 0 0 0-6.7 3.6L75.7 56H48a24.1 24.1 0 0 0-24 24v112a24.099 24.099 0 0 0 24 24h160a24.094 24.094 0 0 0 16.941-7.059A24.094 24.094 0 0 0 232 192V80a24.099 24.099 0 0 0-24-24Zm-44 76a36.002 36.002 0 0 1-43.023 35.308 35.996 35.996 0 0 1-28.285-28.285 36.002 36.002 0 0 1 15.307-36.956 36.005 36.005 0 0 1 45.457 4.477A36 36 0 0 1 164 132Z"
        fill={fill}
      />
    </Svg>
  );
};

export default camera;

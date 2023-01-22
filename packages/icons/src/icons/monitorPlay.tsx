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
 * monitorPlay component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const monitorPlay = ({
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
        d="M168 224a8 8 0 0 1-8 8H96a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 96 216h64a8 8 0 0 1 8 8Zm64-160v112a24.094 24.094 0 0 1-7.059 16.941A24.094 24.094 0 0 1 208 200H48a24.099 24.099 0 0 1-24-24V64a24.1 24.1 0 0 1 24-24h160a24.099 24.099 0 0 1 24 24Zm-68 56a7.896 7.896 0 0 0-3.7-6.7l-44-28a7.898 7.898 0 0 0-8.1-.3 8 8 0 0 0-4.2 7v56a8 8 0 0 0 4.2 7 7.702 7.702 0 0 0 8.1-.3l44-28a7.896 7.896 0 0 0 3.7-6.7Z"
        fill={fill}
      />
    </Svg>
  );
};

export default monitorPlay;

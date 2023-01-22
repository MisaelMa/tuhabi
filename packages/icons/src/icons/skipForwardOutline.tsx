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
 * skipForwardOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const skipForwardOutline = ({
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
        d="M208 40a8 8 0 0 0-16 0v73.779L72.4 40.591l-.014-.008A16 16 0 0 0 48 54.338v147.324a16.003 16.003 0 0 0 16.304 16.127 16 16 0 0 0 8.085-2.374l.012-.006L192 142.221V216a8 8 0 0 0 16 0V40ZM64.024 54.224 184.586 128 64.024 201.776l-.024.015V54.209l.024.015Z"
        fill={fill}
      />
    </Svg>
  );
};

export default skipForwardOutline;

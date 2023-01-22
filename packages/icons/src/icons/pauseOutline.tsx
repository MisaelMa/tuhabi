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
 * pauseOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const pauseOutline = ({
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
        d="M56 32c-8.837 0-16 7.163-16 16v160c0 8.837 7.163 16 16 16h36c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H56Zm0 16h36v160H56V48Zm108-16c-8.837 0-16 7.163-16 16v160c0 8.837 7.163 16 16 16h36c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16h-36Zm0 16h36v160h-36V48Z"
        fill={fill}
      />
    </Svg>
  );
};

export default pauseOutline;

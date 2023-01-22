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
 * pause component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const pause = ({
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
        d="M216 48v160c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 200 224h-36a16.004 16.004 0 0 1-11.314-4.686A16.004 16.004 0 0 1 148 208V48a16.002 16.002 0 0 1 16-16h36a16.002 16.002 0 0 1 16 16ZM92 32H56a16 16 0 0 0-16 16v160a16.002 16.002 0 0 0 16 16h36c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V48a16.002 16.002 0 0 0-16-16Z"
        fill={fill}
      />
    </Svg>
  );
};

export default pause;

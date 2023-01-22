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
 * speakerHigh component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerHigh = ({
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
        d="M155.5 24.8a7.999 7.999 0 0 0-8.4.9L77.3 80H32a16 16 0 0 0-16 16v64a16.002 16.002 0 0 0 16 16h45.3l69.8 54.3a8.1 8.1 0 0 0 4.9 1.7 8.49 8.49 0 0 0 3.5-.8 7.802 7.802 0 0 0 4.5-7.2V32a8.101 8.101 0 0 0-4.5-7.2ZM32 96h40v64H32V96Zm192.6-24.6a8.035 8.035 0 0 0-5.685-2.326 8.03 8.03 0 0 0-7.991 8.061A8.025 8.025 0 0 0 213.3 82.8a64.1 64.1 0 0 1 0 90.5 7.905 7.905 0 0 0 0 11.3 8 8 0 0 0 5.6 2.3 8.3 8.3 0 0 0 5.7-2.3 80.2 80.2 0 0 0 0-113.2Zm-41.36 30.885A7.914 7.914 0 0 1 185 99.7a8.001 8.001 0 0 1 11.3 0 40.1 40.1 0 0 1 0 56.6 7.802 7.802 0 0 1-5.7 2.3 7.607 7.607 0 0 1-5.6-2.3 7.905 7.905 0 0 1 0-11.3 24.101 24.101 0 0 0 0-34 7.905 7.905 0 0 1-1.76-8.715Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerHigh;

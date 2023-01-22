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
 * speakerLow component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerLow = ({
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
        d="M151.172 24.05c1.484-.158 2.983.101 4.328.75A8.096 8.096 0 0 1 160 32v192a8 8 0 0 1-4.5 7.2 8.49 8.49 0 0 1-3.5.8 8.1 8.1 0 0 1-4.9-1.7L77.3 176H32a16.002 16.002 0 0 1-16-16V96a16 16 0 0 1 16-16h45.3l69.8-54.3a8 8 0 0 1 4.072-1.65ZM72 96H32v64h40V96Zm118.65 1.364c2.118 0 4.15.84 5.65 2.336a40.1 40.1 0 0 1 0 56.6 7.802 7.802 0 0 1-5.7 2.3 7.607 7.607 0 0 1-5.6-2.3 7.905 7.905 0 0 1 0-11.3 24.101 24.101 0 0 0 0-34 7.905 7.905 0 0 1 0-11.3 8.001 8.001 0 0 1 5.65-2.336Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerLow;

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
 * skipBackOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const skipBackOutline = ({
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
        d="M64 40a8 8 0 1 0-16 0v176a8 8 0 0 0 16 0v-73.779l119.6 73.188.011.006a15.996 15.996 0 0 0 22.256-5.641 16.001 16.001 0 0 0 2.133-8.112V54.338a16 16 0 0 0-24.386-13.756l-.014.01L64 113.779V40Zm7.414 88 120.562-73.776.024-.015V201.7l.001.092-.025-.016L71.414 128Z"
        fill={fill}
      />
    </Svg>
  );
};

export default skipBackOutline;

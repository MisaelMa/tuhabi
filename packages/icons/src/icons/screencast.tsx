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
 * screencast component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const screencast = ({
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
        d="M40 40h176a16.002 16.002 0 0 1 16 16v144c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 216 216h-72a8 8 0 0 1-8-8A104.203 104.203 0 0 0 32 104a8.001 8.001 0 0 1-8-8V56a16 16 0 0 1 16-16Zm-8 80a8.001 8.001 0 0 0-5.657 13.657A8.001 8.001 0 0 0 32 136a72.098 72.098 0 0 1 72 72 8 8 0 1 0 16 0 88.096 88.096 0 0 0-88-88Zm-5.657 34.343A8.001 8.001 0 0 1 32 152a56 56 0 0 1 56 56 8 8 0 1 1-16 0 39.998 39.998 0 0 0-40-40 8.001 8.001 0 0 1-5.657-13.657Zm0 32A8.001 8.001 0 0 1 32 184a24.099 24.099 0 0 1 24 24 8 8 0 1 1-16 0 8 8 0 0 0-8-8 8.001 8.001 0 0 1-5.657-13.657Z"
        fill={fill}
      />
    </Svg>
  );
};

export default screencast;

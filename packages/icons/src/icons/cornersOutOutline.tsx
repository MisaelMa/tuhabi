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
 * cornersOutOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const cornersOutOutline = ({
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
        d="M168 40a8 8 0 0 0 0 16h32v32a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8h-40ZM56 168a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16H56v-32Zm152-8a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h32v-32a8 8 0 0 1 8-8ZM48 40a8 8 0 0 0-8 8v40a8 8 0 1 0 16 0V56h32a8 8 0 1 0 0-16H48Z"
        fill={fill}
      />
    </Svg>
  );
};

export default cornersOutOutline;

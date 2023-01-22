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
 * pinterestLogoOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const pinterestLogoOutline = ({
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
        d="M140.228 41.174A72 72 0 0 0 68.15 152.153a8 8 0 1 1-13.3 8.894A88.002 88.002 0 0 1 102.37 27.943 88 88 0 0 1 216 111.987V112c0 48.323-35.292 80-72 80-17.58 0-29.635-5.737-37.428-12.002l-10.785 45.834a8 8 0 0 1-9.62 5.955 8 8 0 0 1-5.954-9.619l32-136a8 8 0 1 1 15.574 3.665l-16.875 71.718.018.024c1.057 1.494 2.788 3.584 5.358 5.702C121.312 171.418 129.929 176 144 176c27.291 0 55.998-23.921 56-63.996a72.003 72.003 0 0 0-59.772-70.83Z"
        fill={fill}
      />
    </Svg>
  );
};

export default pinterestLogoOutline;

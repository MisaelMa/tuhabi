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
 * magnifyingGlass component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const magnifyingGlass = ({
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
        d="M176 116a59.998 59.998 0 0 1-71.705 58.847A59.998 59.998 0 0 1 116 56a59.999 59.999 0 0 1 60 60Zm53.6 113.7a7.995 7.995 0 0 1-5.6 2.3 8.3 8.3 0 0 1-5.7-2.3l-43.2-43.3a92.202 92.202 0 0 1-151.478-72.6A92.2 92.2 0 1 1 186.4 175.1l43.2 43.2a8.003 8.003 0 0 1 1.766 8.79 8.003 8.003 0 0 1-1.766 2.61ZM116 192a76 76 0 1 0-76-76 76.1 76.1 0 0 0 76 76Z"
        fill={fill}
      />
    </Svg>
  );
};

export default magnifyingGlass;

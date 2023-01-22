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
 * nutOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const nutOutline = ({
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
        d="M120.136 19.251a15.8 15.8 0 0 1 15.728 0l83.987 47.492A16.107 16.107 0 0 1 228 80.657V175.3h-8l8 .043a16.108 16.108 0 0 1-2.207 8.051 16.108 16.108 0 0 1-5.943 5.863l-83.986 47.492a15.802 15.802 0 0 1-15.728 0l-83.974-47.485-.012-.007A16.105 16.105 0 0 1 28 175.343V80.657a16.1 16.1 0 0 1 8.15-13.913l.012-.008 83.974-47.485ZM212 175.261V80.739a.093.093 0 0 0-.014-.046l-.019-.024-.016-.012L128 33.185 44.05 80.657a.1.1 0 0 0-.05.082v94.522a.102.102 0 0 0 .05.082L128 222.815l83.949-47.472a.092.092 0 0 0 .037-.036.095.095 0 0 0 .014-.046Z"
        fill={fill}
      />
    </Svg>
  );
};

export default nutOutline;

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
 * trophyOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const trophyOutline = ({
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
        d="M52.686 44.686A16 16 0 0 1 64 40h128a16.002 16.002 0 0 1 16 16v8h24a16 16 0 0 1 16 16v16a39.996 39.996 0 0 1-11.716 28.284A39.996 39.996 0 0 1 208 136h-3.684a79.992 79.992 0 0 1-46.086 50.07 79.998 79.998 0 0 1-22.23 5.531V216h24a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16h24v-24.403C87.827 188.345 61.492 165.811 51.898 136H47.9a39.998 39.998 0 0 1-40-40V80a16 16 0 0 1 16-16H48v-8a16 16 0 0 1 4.686-11.314ZM48 80H23.9v16a24.002 24.002 0 0 0 24 24h.585a81.725 81.725 0 0 1-.485-8.9V80Zm17.92 46.861a7.93 7.93 0 0 0-.331-1.401A65.434 65.434 0 0 1 64 111.1V56h128v56a63.966 63.966 0 0 1-4.914 24.595 64.003 64.003 0 0 1-58.927 39.407L128 176l-.159.002-.281-.002c-29.794-.225-54.707-21.203-61.64-49.139ZM207.599 120H208a24 24 0 0 0 24-24V80h-24v32c0 2.677-.134 5.347-.401 8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default trophyOutline;

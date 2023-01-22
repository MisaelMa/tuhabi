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
 * clockClockwise component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const clockClockwise = ({
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
        d="M136 80v43.4l37.6 21.7a8 8 0 0 1-4 14.9 7.096 7.096 0 0 1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.51.51 0 0 1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.401.401 0 0 1-.1-.3l-.2-.4a.394.394 0 0 0-.1-.3c0-.2 0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8.001 8.001 0 0 1 16 0Zm91.2-27.7a8 8 0 0 0-8.7 1.8l-14.3 14.3-8.3-8.3a95.999 95.999 0 1 0 0 135.8 8.001 8.001 0 0 0 0-11.3 7.903 7.903 0 0 0-8.715-1.76 7.914 7.914 0 0 0-2.585 1.76 79.997 79.997 0 0 1-87.172 17.302A80.004 80.004 0 0 1 48.063 128 79.999 79.999 0 0 1 184.6 71.4l8.3 8.3-14.4 14.4a8 8 0 0 0 5.7 13.6h40a8 8 0 0 0 8-8v-40a8.203 8.203 0 0 0-5-7.4Z"
        fill={fill}
      />
    </Svg>
  );
};

export default clockClockwise;

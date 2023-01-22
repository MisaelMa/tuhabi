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
 * clockCounterClockwise component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const clockCounterClockwise = ({
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
        d="M136 80v43.4l37.6 21.7a8.005 8.005 0 0 1 .839 13.233A7.999 7.999 0 0 1 169.6 160a7.096 7.096 0 0 1-4-1.1l-41.6-24h-.2l-.4-.2-.3-.3-.3-.2-.3-.3-.2-.2c-.2-.1-.3-.3-.4-.4l-.2-.2-.2-.4-.2-.3-.2-.3a.5.5 0 0 1-.2-.4l-.2-.3c0-.1-.1-.2-.1-.4a.401.401 0 0 1-.1-.3l-.2-.4a.412.412 0 0 0-.1-.3c0-.2 0-.3-.1-.4v-.4c0-.2-.1-.3-.1-.4V80a8.001 8.001 0 0 1 13.657-5.657A8.001 8.001 0 0 1 136 80Zm59.9-19.9a96.2 96.2 0 0 0-135.8 0l-8.3 8.3-14.3-14.3a8 8 0 0 0-8.7-1.8 8.2 8.2 0 0 0-5 7.4v40a8 8 0 0 0 8 8h40a8.004 8.004 0 0 0 7.365-4.908A8 8 0 0 0 77.5 94.1L63.1 79.7l8.3-8.3a80 80 0 1 1 0 113.2 7.908 7.908 0 0 0-5.65-2.378 7.908 7.908 0 0 0-5.65 2.378 8.001 8.001 0 0 0 0 11.3A96.025 96.025 0 0 0 195.9 60.1Z"
        fill={fill}
      />
    </Svg>
  );
};

export default clockCounterClockwise;

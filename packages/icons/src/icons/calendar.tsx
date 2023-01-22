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
 * calendar component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const calendar = ({
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
        d="M208 32h-24v-8a8.001 8.001 0 0 0-13.657-5.657A8.001 8.001 0 0 0 168 24v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16.002 16.002 0 0 0 16 16h160c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V48a16.002 16.002 0 0 0-16-16ZM104 188a24.198 24.198 0 0 1-17-7 8.001 8.001 0 0 1 0-11.3 7.908 7.908 0 0 1 5.65-2.378 7.908 7.908 0 0 1 5.65 2.378 8.3 8.3 0 0 0 5.7 2.3 8 8 0 1 0 0-16h-2.5l-.4-.2h-.3l-.5-.2h-.1l-.6-.4h-.2l-.4-.3-.4-.3-.2-.2-.3-.3a8.596 8.596 0 0 1-1.3-2 5.806 5.806 0 0 1-.6-1.7c-.1-.1-.1-.2-.1-.4a.397.397 0 0 0-.1-.3v-2.4c0-.2.1-.3.1-.4v-.4a.6.6 0 0 0 .1-.4c.1-.1.1-.2.1-.4l.2-.3c0-.2 0-.3.1-.4l.2-.4v-.3l.2-.4.2-.3.3-.4.2-.2 5.6-7H92a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 92 120h28a7.994 7.994 0 0 1 7.176 4.556A7.998 7.998 0 0 1 126.2 133l-8.8 11.1A24 24 0 0 1 104 188Zm64-8a8 8 0 1 1-16 0v-36l-3.2 2.4a8.101 8.101 0 0 1-11.2-1.6 8 8 0 0 1 1.6-11.2l16-12A8 8 0 0 1 168 128v52Zm40-100H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8.001 8.001 0 0 0 13.657 5.657A8.001 8.001 0 0 0 184 56v-8h24v32Z"
        fill={fill}
      />
    </Svg>
  );
};

export default calendar;

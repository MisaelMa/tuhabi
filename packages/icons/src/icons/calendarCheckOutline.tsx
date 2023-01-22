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
 * calendarCheckOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const calendarCheckOutline = ({
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
        d="M176 16a8 8 0 0 1 8 8v8h24c8.837 0 16 7.163 16 16v160c0 8.837-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h24v-8a8 8 0 1 1 16 0v8h80v-8a8 8 0 0 1 8-8Zm8 32h24v32H48V48h24v8a8 8 0 1 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8Zm24 48H48v112h160V96Zm-38.514 37.823a8 8 0 1 0-10.972-11.646l-41.195 38.814-19.813-18.795a8 8 0 0 0-11.012 11.608l25.3 24a8 8 0 0 0 10.992.019l46.7-44Z"
        fill={fill}
      />
    </Svg>
  );
};

export default calendarCheckOutline;

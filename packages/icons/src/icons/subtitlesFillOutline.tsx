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
 * subtitlesFillOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const subtitlesFillOutline = ({
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
        d="M32.5 64a.5.5 0 0 0-.5.5v127a.5.5 0 0 0 .5.5h191a.5.5 0 0 0 .5-.5v-127a.5.5 0 0 0-.5-.5h-191Zm-16.5.5C16 55.387 23.387 48 32.5 48h191c9.113 0 16.5 7.387 16.5 16.5v127c0 9.113-7.387 16.5-16.5 16.5h-191c-9.113 0-16.5-7.387-16.5-16.5v-127ZM48 128a8 8 0 0 1 8-8h8a8 8 0 0 1 0 16h-8a8 8 0 0 1-8-8Zm8 24a8 8 0 0 0 0 16h104a8 8 0 0 0 0-16H56Zm32-24a8 8 0 0 1 8-8h104a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Zm104 24a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16h-8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default subtitlesFillOutline;

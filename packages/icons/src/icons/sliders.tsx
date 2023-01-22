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
 * sliders component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const sliders = ({
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
        d="M64 40v73.4a24.001 24.001 0 0 1 0 45.2V216a8 8 0 1 1-16 0v-57.4a24.001 24.001 0 0 1 0-45.2V40a8 8 0 0 1 16 0Zm72 25.4V40a8.001 8.001 0 0 0-13.657-5.657A8.001 8.001 0 0 0 120 40v25.4a23.999 23.999 0 0 0-11.542 36.423A24 24 0 0 0 120 110.6V216a8 8 0 1 0 16 0V110.6a24 24 0 0 0 0-45.2ZM224 168a24.003 24.003 0 0 0-16-22.6V40a8.001 8.001 0 0 0-13.657-5.657A8.001 8.001 0 0 0 192 40v105.4a24 24 0 0 0 0 45.2V216a8 8 0 1 0 16 0v-25.4a24 24 0 0 0 16-22.6Z"
        fill={fill}
      />
    </Svg>
  );
};

export default sliders;

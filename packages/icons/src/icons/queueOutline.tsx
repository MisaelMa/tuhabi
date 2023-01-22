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
 * queueOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const queueOutline = ({
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
        d="M40 56a8 8 0 1 0 0 16h176a8 8 0 0 0 0-16H40Zm0 64a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16H40Zm-8 72a8 8 0 0 1 8-8h96a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm148.24-78.784A8 8 0 0 0 168 120v80a8 8 0 0 0 12.24 6.784l64-40a8 8 0 0 0 0-13.568l-64-40ZM224.906 160 184 185.566v-51.132L224.906 160Z"
        fill={fill}
      />
    </Svg>
  );
};

export default queueOutline;

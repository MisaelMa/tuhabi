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
 * magnifyingGlassOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const magnifyingGlassOutline = ({
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
        d="M40 116c0-41.974 34.026-76 76-76s76 34.026 76 76-34.026 76-76 76-76-34.026-76-76Zm76-92c-50.81 0-92 41.19-92 92s41.19 92 92 92c22.525 0 43.159-8.095 59.152-21.534l43.191 43.191a8 8 0 0 0 11.314-11.314l-43.191-43.191C199.905 159.159 208 138.525 208 116c0-50.81-41.19-92-92-92Z"
        fill={fill}
      />
    </Svg>
  );
};

export default magnifyingGlassOutline;

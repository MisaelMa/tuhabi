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
 * arrowsInSimple component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowsInSimple = ({
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
        d="M213.7 53.7 187.3 80l18.4 18.3a8.404 8.404 0 0 1 1.7 8.8 7.998 7.998 0 0 1-7.4 4.9h-48a8.002 8.002 0 0 1-8-8V56a8 8 0 0 1 4.9-7.4 8.4 8.4 0 0 1 8.8 1.7L176 68.7l26.3-26.4a8.1 8.1 0 0 1 11.4 11.4ZM104 144H56a8 8 0 0 0-7.4 4.9 8.4 8.4 0 0 0 1.7 8.8L68.7 176l-26.4 26.3a8.1 8.1 0 0 0 0 11.4 8.198 8.198 0 0 0 11.4 0L80 187.3l18.3 18.4a8.3 8.3 0 0 0 5.7 2.3 8.504 8.504 0 0 0 3.1-.6 7.998 7.998 0 0 0 4.9-7.4v-48a8 8 0 0 0-8-8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowsInSimple;

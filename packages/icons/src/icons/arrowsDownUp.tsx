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
 * arrowsDownUp component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowsDownUp = ({
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
        d="M119.4 172.9a8.403 8.403 0 0 1-1.7 8.8l-32 32a8.198 8.198 0 0 1-11.4 0l-32-32a8.401 8.401 0 0 1-1.7-8.8A8 8 0 0 1 48 168h24V48a8 8 0 0 1 16 0v120h24a8 8 0 0 1 7.4 4.9Zm94.3-98.6-32-32a8.1 8.1 0 0 0-11.4 0l-32 32a8.404 8.404 0 0 0-1.7 8.8A7.999 7.999 0 0 0 144 88h24v120a8 8 0 1 0 16 0V88h24a7.999 7.999 0 0 0 7.4-4.9 8.402 8.402 0 0 0-1.7-8.8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowsDownUp;

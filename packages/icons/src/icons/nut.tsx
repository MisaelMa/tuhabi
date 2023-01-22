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
 * nut component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const nut = ({
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
        d="m219.9 66.7-84-47.4a15.901 15.901 0 0 0-15.8 0l-84 47.4a16.2 16.2 0 0 0-8.1 14v94.6a16.198 16.198 0 0 0 8.1 14l84 47.4a15.9 15.9 0 0 0 15.8 0l84-47.4a16.196 16.196 0 0 0 8.1-14V80.7a16.194 16.194 0 0 0-8.1-14ZM128 164a36.002 36.002 0 0 1-35.308-43.023A36.001 36.001 0 1 1 128 164Z"
        fill={fill}
      />
    </Svg>
  );
};

export default nut;

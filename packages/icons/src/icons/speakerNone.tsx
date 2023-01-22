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
 * speakerNone component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerNone = ({
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
        d="M155.5 24.8a7.999 7.999 0 0 0-8.4.9L77.3 80H32a16 16 0 0 0-16 16v64a16.002 16.002 0 0 0 16 16h45.3l69.8 54.3a8.1 8.1 0 0 0 4.9 1.7 8.49 8.49 0 0 0 3.5-.8 8.005 8.005 0 0 0 4.5-7.2V32a8 8 0 0 0-4.5-7.2ZM32 96h40v64H32V96Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerNone;

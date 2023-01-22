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
 * speakerHighOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerHighOutline = ({
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
        d="M155.515 24.814A8 8 0 0 1 160 32v192a8.001 8.001 0 0 1-12.912 6.315L77.255 176H32a16.002 16.002 0 0 1-16-16V96a16 16 0 0 1 16-16h45.255l69.833-54.315a8.001 8.001 0 0 1 8.427-.871ZM72 96H32v64h40V96Zm16 68.087 56 43.556V48.357L88 91.913v72.174ZM213.237 71.45a8 8 0 0 1 11.313-.013 79.902 79.902 0 0 1 0 113.126 7.999 7.999 0 0 1-11.313-.013 7.999 7.999 0 0 1 .013-11.313 63.914 63.914 0 0 0 13.89-69.725 63.914 63.914 0 0 0-13.89-20.749 8 8 0 0 1-.013-11.313Zm-28.305 28.304a8 8 0 0 1 11.314-.022 39.905 39.905 0 0 1 8.689 43.573 39.917 39.917 0 0 1-8.689 12.963 8 8 0 0 1-11.292-11.336 23.896 23.896 0 0 0 0-33.864 8 8 0 0 1-.022-11.314Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerHighOutline;

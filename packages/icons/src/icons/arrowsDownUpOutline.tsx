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
 * arrowsDownUpOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowsDownUpOutline = ({
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
        d="M170.343 42.343a8 8 0 0 1 11.314 0l32 32a8 8 0 0 1-11.314 11.314L184 67.314V208a8 8 0 0 1-16 0V67.314l-18.343 18.343a8 8 0 0 1-11.314-11.314l32-32ZM80 40a8 8 0 0 1 8 8v140.686l18.343-18.343a8 8 0 0 1 11.314 11.314l-32 32a8 8 0 0 1-11.314 0l-32-32a8 8 0 0 1 11.314-11.314L72 188.686V48a8 8 0 0 1 8-8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowsDownUpOutline;

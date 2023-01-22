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
 * speakerLowOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerLowOutline = ({
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
        d="M155.515 24.814A8 8 0 0 1 160 32v192a8.001 8.001 0 0 1-12.912 6.315L77.255 176H32a16.002 16.002 0 0 1-16-16V96a16 16 0 0 1 16-16h45.255l69.833-54.315a8.001 8.001 0 0 1 8.427-.871ZM144 48.356 88 91.913v72.174l56 43.556V48.357ZM32 96h40v64H32V96Zm164.246 3.732a8 8 0 0 0-11.292 11.336 23.896 23.896 0 0 1 0 33.864 8 8 0 0 0 11.292 11.336A39.91 39.91 0 0 0 207.987 128a39.889 39.889 0 0 0-11.741-28.268Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerLowOutline;

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
 * screencastOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const screencastOutline = ({
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
        d="M40 40a16 16 0 0 0-16 16v40a8 8 0 0 0 16 0V56h176v144h-72a8 8 0 0 0 0 16h72c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V56a16.002 16.002 0 0 0-16-16H40Zm-8 144a8 8 0 0 0 0 16 8.001 8.001 0 0 1 8 8 8 8 0 0 0 16 0 24.002 24.002 0 0 0-24-24Zm-8-24a8 8 0 0 1 8-8 56 56 0 0 1 56 56 8 8 0 0 1-16 0 39.998 39.998 0 0 0-40-40 8 8 0 0 1-8-8Zm8-40a8 8 0 0 0 0 16 71.99 71.99 0 0 1 66.52 44.447A71.991 71.991 0 0 1 104 208a8 8 0 0 0 16 0 87.991 87.991 0 0 0-25.775-62.225A87.986 87.986 0 0 0 32 120Z"
        fill={fill}
      />
    </Svg>
  );
};

export default screencastOutline;

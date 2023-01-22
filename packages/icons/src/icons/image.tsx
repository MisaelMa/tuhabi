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
 * image component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const image = ({
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
        d="M168 100c0 3.183-1.264 6.235-3.515 8.485a11.996 11.996 0 0 1-16.97 0 11.996 11.996 0 0 1 0-16.97 11.998 11.998 0 0 1 16.97 0A11.998 11.998 0 0 1 168 100Zm64-44v144c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 216 216H40a16.002 16.002 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16.002 16.002 0 0 1 16 16Zm-16 108.7V56H40v92.7L76.7 112a16.1 16.1 0 0 1 22.6 0l44.7 44.7 20.7-20.7a16.1 16.1 0 0 1 22.6 0l28.7 28.7Z"
        fill={fill}
      />
    </Svg>
  );
};

export default image;

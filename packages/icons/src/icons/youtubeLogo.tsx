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
 * youtubeLogo component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const youtubeLogo = ({
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
        d="M234.3 69.8a23.492 23.492 0 0 0-14.5-16.3C185.6 40.3 131 40.4 128 40.4s-57.6-.1-91.8 13.1a23.5 23.5 0 0 0-14.5 16.3C19.1 79.7 16 97.9 16 128s3.1 48.3 5.7 58.2a23.497 23.497 0 0 0 14.5 16.3c32.8 12.7 84.2 13.1 91.1 13.1h1.4c6.9 0 58.3-.4 91.1-13.1a23.49 23.49 0 0 0 9.256-6.366 23.483 23.483 0 0 0 5.244-9.934c2.6-9.9 5.7-28.1 5.7-58.2s-3.1-48.3-5.7-58.2Zm-72.1 61.5-48 32a3.608 3.608 0 0 1-2.2.7 4.516 4.516 0 0 1-1.9-.5 3.904 3.904 0 0 1-2.1-3.5V96a3.901 3.901 0 0 1 2.1-3.5 4.002 4.002 0 0 1 4.1.2l48 32a3.9 3.9 0 0 1 0 6.6Z"
        fill={fill}
      />
    </Svg>
  );
};

export default youtubeLogo;

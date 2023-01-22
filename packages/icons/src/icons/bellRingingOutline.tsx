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
 * bellRingingOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const bellRingingOutline = ({
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
        d="M76.87 30.765a8 8 0 0 0-8.54-13.53 113 113 0 0 0-40.895 45.308 8 8 0 1 0 14.33 7.114A97 97 0 0 1 76.87 30.765Zm99.765-11.035a8 8 0 0 1 11.035-2.495 113 113 0 0 1 40.896 45.308 8 8 0 0 1-14.332 7.114 96.997 96.997 0 0 0-35.104-38.892 8 8 0 0 1-2.495-11.035Zm-73.05 33.326a63.797 63.797 0 0 1 83.359 34.529A63.806 63.806 0 0 1 191.8 112c0 36.925 7.742 59.163 15.172 72H49.028c7.43-12.837 15.172-35.075 15.172-72a63.802 63.802 0 0 1 39.385-58.944ZM88 200H48.972a15.995 15.995 0 0 1-13.814-8.024A16.002 16.002 0 0 1 35.172 176l.005-.008C40.946 166.027 48.2 146.667 48.2 112a79.8 79.8 0 0 1 159.6 0c0 34.667 7.254 54.027 13.023 63.992l.005.008a16.004 16.004 0 0 1 .014 15.976 15.992 15.992 0 0 1-5.834 5.859 15.992 15.992 0 0 1-7.98 2.165H168a39.996 39.996 0 0 1-11.716 28.284 39.996 39.996 0 0 1-56.568 0A39.998 39.998 0 0 1 88 200Zm16 0c0 6.365 2.529 12.47 7.029 16.971a24.005 24.005 0 0 0 33.942 0A24.005 24.005 0 0 0 152 200h-48Z"
        fill={fill}
      />
    </Svg>
  );
};

export default bellRingingOutline;

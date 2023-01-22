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
 * basketball component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const basketball = ({
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
        d="M63.6 46.4a104.3 104.3 0 0 1 52-21.7 4.002 4.002 0 0 1 4.4 4V120H95.7a104.1 104.1 0 0 0-32.3-67.6 3.901 3.901 0 0 1 .2-6ZM46 64.1a104.8 104.8 0 0 0-21.3 51.4 4.102 4.102 0 0 0 4 4.5h50.9a88 88 0 0 0-27.7-56.4 4.001 4.001 0 0 0-5.9.5Zm146.4-17.7a104.3 104.3 0 0 0-52-21.7 4 4 0 0 0-4.4 4V120h24.3a104.1 104.1 0 0 1 32.3-67.6 3.892 3.892 0 0 0 1.309-3.047A3.896 3.896 0 0 0 192.4 46.4Zm38.9 69.1A104.802 104.802 0 0 0 210 64.1a4.001 4.001 0 0 0-5.9-.5 87.996 87.996 0 0 0-27.7 56.4h50.9a4.098 4.098 0 0 0 3.819-2.831 4.121 4.121 0 0 0 .181-1.669Zm-206.6 25A104.802 104.802 0 0 0 46 191.9a4 4 0 0 0 5.9.5A88.001 88.001 0 0 0 79.6 136H28.7a4.094 4.094 0 0 0-2.984 1.375A4.11 4.11 0 0 0 24.7 140.5ZM210 191.9a104.804 104.804 0 0 0 21.3-51.4 4.121 4.121 0 0 0-.181-1.669A4.105 4.105 0 0 0 227.3 136h-50.9a87.998 87.998 0 0 0 27.7 56.4 3.995 3.995 0 0 0 5.9-.5ZM63.6 209.6a104.303 104.303 0 0 0 52 21.7 4 4 0 0 0 4.4-4V136H95.7a104.1 104.1 0 0 1-32.3 67.6 3.9 3.9 0 0 0 .2 6Zm96.7-73.6H136v91.3a3.993 3.993 0 0 0 2.746 3.818 3.997 3.997 0 0 0 1.654.182 104.302 104.302 0 0 0 52-21.7 3.906 3.906 0 0 0 1.509-2.953 3.894 3.894 0 0 0-1.309-3.047 104.101 104.101 0 0 1-32.3-67.6Z"
        fill={fill}
      />
    </Svg>
  );
};

export default basketball;

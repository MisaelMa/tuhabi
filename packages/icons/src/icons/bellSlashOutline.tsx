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
 * bellSlashOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const bellSlashOutline = ({
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
        d="M96.484 48.337A62.799 62.799 0 0 1 128.416 40h.023c35.062.266 63.361 29.45 63.361 64.901v7.1c0 27.547 4.335 46.853 9.547 60.208a8 8 0 0 0 14.906-5.816c-4.388-11.245-8.453-28.539-8.453-54.392v-7.1c0-43.946-35.095-80.559-79.228-80.9a78.798 78.798 0 0 0-40.056 10.463 8 8 0 0 0 7.968 13.874ZM53.92 34.62A8 8 0 0 0 42.08 45.38L58.9 63.883A80.401 80.401 0 0 0 48.2 104v8c0 34.667-7.254 54.027-13.023 63.992l-.005.008a15.999 15.999 0 0 0 13.8 24H88a39.998 39.998 0 0 0 40 40 39.996 39.996 0 0 0 28.284-11.716A39.996 39.996 0 0 0 168 200h14.643l19.437 21.381a8 8 0 0 0 11.301.539 8 8 0 0 0 .539-11.301l-21.495-23.645a8.196 8.196 0 0 0-.627-.69L53.919 34.619Zm10.28 69.377a64.402 64.402 0 0 1 6.155-27.512L168.097 184H49.028c7.43-12.837 15.172-35.075 15.172-72v-8.004ZM104 200h48c0 6.365-2.529 12.47-7.029 16.971a24.005 24.005 0 0 1-33.942 0A24.005 24.005 0 0 1 104 200Z"
        fill={fill}
      />
    </Svg>
  );
};

export default bellSlashOutline;

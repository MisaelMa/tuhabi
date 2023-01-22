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
 * bellSlash component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const bellSlash = ({
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
        d="M53.9 34.6a8 8 0 0 0-11.8 10.8l16.8 18.5A80.199 80.199 0 0 0 48.2 104v8c0 34.3-7.1 53.7-13 63.9A16 16 0 0 0 49 200h39a39.998 39.998 0 0 0 40 40 39.996 39.996 0 0 0 28.284-11.716A39.996 39.996 0 0 0 168 200h14.6l19.5 21.4a8.009 8.009 0 0 0 5.9 2.6 8.203 8.203 0 0 0 5.4-2.1 7.908 7.908 0 0 0 2.632-5.545 7.914 7.914 0 0 0-.484-3.093 7.927 7.927 0 0 0-1.648-2.662l-160-176ZM128 224a24.098 24.098 0 0 1-24-24h48a24.094 24.094 0 0 1-7.059 16.941A24.094 24.094 0 0 1 128 224ZM86.6 46.8a8.1 8.1 0 0 1 1.9-12.4A80.198 80.198 0 0 1 128.6 24c43.7.3 79.2 36.6 79.2 80.9v7.1c0 21.9 2.8 40.1 8.4 54.4a8.003 8.003 0 0 1-3.261 9.581A8.003 8.003 0 0 1 202.9 174.7L86.6 46.8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default bellSlash;

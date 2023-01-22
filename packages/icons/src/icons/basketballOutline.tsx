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
 * basketballOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const basketballOutline = ({
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
        d="M120 40.359c-18.466 1.664-35.287 9.032-48.687 20.329A103.905 103.905 0 0 1 95.698 120H120V40.359ZM128 24c-28.534 0-54.385 11.492-73.175 30.099a8.15 8.15 0 0 0-.942.944C35.403 73.815 24 99.576 24 128c0 28.424 11.403 54.185 29.884 72.958a7.885 7.885 0 0 0 .94.942C73.614 220.508 99.465 232 128 232c28.534 0 54.384-11.491 73.175-30.098a8.147 8.147 0 0 0 .943-.946C220.598 182.183 232 156.423 232 128c0-28.423-11.402-54.183-29.882-72.955a8.017 8.017 0 0 0-.944-.948C182.383 35.491 156.533 24 128 24Zm8 16.359V120h24.313a104.113 104.113 0 0 1 24.379-59.308C171.291 49.392 154.468 42.023 136 40.36ZM120 136H95.698a103.902 103.902 0 0 1-24.385 59.312c13.4 11.297 30.221 18.665 48.687 20.329V136Zm16 79.641V136h24.313a104.115 104.115 0 0 0 24.379 59.308c-13.401 11.299-30.224 18.669-48.692 20.333ZM60.016 72.121A87.906 87.906 0 0 1 79.642 120H40.358c1.63-18.097 8.74-34.614 19.657-47.88ZM79.642 136H40.358c1.63 18.097 8.74 34.614 19.656 47.88A87.908 87.908 0 0 0 79.642 136ZM195.99 72.126c10.913 13.265 18.021 29.78 19.651 47.874H176.37a88.095 88.095 0 0 1 19.62-47.874ZM215.641 136H176.37a88.093 88.093 0 0 0 19.62 47.873c10.913-13.264 18.021-29.779 19.651-47.873Z"
        fill={fill}
      />
    </Svg>
  );
};

export default basketballOutline;

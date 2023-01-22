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
 * gearSixOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const gearSixOutline = ({
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
        d="M100.316 22.04a8 8 0 0 0-6.574-.753 111.999 111.999 0 0 0-41.03 23.8 8 8 0 0 0-2.61 6.048l.457 27.182a81.606 81.606 0 0 0-4.338 7.505l-23.797 13.18a8.001 8.001 0 0 0-3.94 5.29 110 110 0 0 0 .108 47.451 8 8 0 0 0 3.92 5.249l23.71 13.182a87.996 87.996 0 0 0 4.337 7.57l-.458 27.121a8.001 8.001 0 0 0 2.61 6.048 110.602 110.602 0 0 0 41.179 23.715 7.997 7.997 0 0 0 6.518-.763l23.288-13.936c2.866.128 5.737.128 8.603 0l23.385 14.031a7.998 7.998 0 0 0 6.574.753 111.99 111.99 0 0 0 41.03-23.8 7.995 7.995 0 0 0 2.611-6.048l-.458-27.182a81.55 81.55 0 0 0 4.338-7.505l23.797-13.18a8.002 8.002 0 0 0 3.94-5.29 110.02 110.02 0 0 0-.108-47.451 8 8 0 0 0-3.921-5.249l-23.705-13.18a81.694 81.694 0 0 0-4.341-7.511l.458-27.182a7.999 7.999 0 0 0-2.61-6.048 110.607 110.607 0 0 0-41.179-23.715 8 8 0 0 0-6.518.763l-23.288 13.936a96.267 96.267 0 0 0-8.603 0l-23.385-14.03ZM66.599 80.565l-.438-25.998a96.003 96.003 0 0 1 29.115-16.892l22.308 13.385a8.001 8.001 0 0 0 4.687 1.12 80.282 80.282 0 0 1 11.458 0 8 8 0 0 0 4.679-1.115l22.237-13.307a94.606 94.606 0 0 1 29.194 16.81l-.438 25.997a8 8 0 0 0 1.441 4.716 65.683 65.683 0 0 1 5.615 9.715 7.996 7.996 0 0 0 3.356 3.596l22.684 12.612a94.016 94.016 0 0 1 .082 33.595l-22.755 12.603a7.997 7.997 0 0 0-3.367 3.602 65.67 65.67 0 0 1-5.615 9.715 8 8 0 0 0-1.441 4.716l.438 25.998a95.984 95.984 0 0 1-29.115 16.892l-22.308-13.385a8.004 8.004 0 0 0-4.687-1.12 80.252 80.252 0 0 1-11.458 0 8.007 8.007 0 0 0-4.679 1.115l-22.237 13.307a94.585 94.585 0 0 1-29.194-16.81l.438-25.897a8.001 8.001 0 0 0-1.393-4.648 72.088 72.088 0 0 1-5.671-9.901 8.001 8.001 0 0 0-3.347-3.578l-22.685-12.612a94 94 0 0 1-.082-33.595l22.755-12.603a8 8 0 0 0 3.367-3.602 65.595 65.595 0 0 1 5.616-9.715 8 8 0 0 0 1.44-4.716ZM88 128c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40-40-17.909-40-40Zm40-56c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56Z"
        fill={fill}
      />
    </Svg>
  );
};

export default gearSixOutline;

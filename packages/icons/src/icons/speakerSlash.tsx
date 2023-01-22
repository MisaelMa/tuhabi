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
 * speakerSlash component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerSlash = ({
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
        d="M148.773 114.129a7.892 7.892 0 0 1-2.673-1.929l-39.9-43.8a8.107 8.107 0 0 1-2-6.1 8.203 8.203 0 0 1 3-5.6l39.9-31A7.999 7.999 0 0 1 160 32v74.8a8.008 8.008 0 0 1-1.384 4.543 8.004 8.004 0 0 1-3.716 2.957 7.405 7.405 0 0 1-2.9.5 7.894 7.894 0 0 1-3.227-.671ZM48.384 32.132A8 8 0 0 1 53.9 34.6l160 176a7.911 7.911 0 0 1 2.132 5.755 7.915 7.915 0 0 1-2.632 5.545 8.2 8.2 0 0 1-5.4 2.1 8.007 8.007 0 0 1-5.9-2.6L160 175.1V224a8 8 0 0 1-4.5 7.2 8.49 8.49 0 0 1-3.5.8 7.898 7.898 0 0 1-4.9-1.7L77.3 176H32a16.002 16.002 0 0 1-16-16V96a16 16 0 0 1 16-16h41.6L42.1 45.4a8 8 0 0 1 6.284-13.268ZM32 160h40V96H32v64Zm192.5-88.6a8.001 8.001 0 0 0-11.3 0 8.101 8.101 0 0 0 0 11.4 63.911 63.911 0 0 1 18.782 45.25A63.902 63.902 0 0 1 213.2 173.3a8.001 8.001 0 0 0 0 11.3 8.3 8.3 0 0 0 5.7 2.3 8 8 0 0 0 5.6-2.3 79.907 79.907 0 0 0 23.505-56.6A79.91 79.91 0 0 0 224.5 71.4Zm-34.338 65.815A23.797 23.797 0 0 0 192 128a23.797 23.797 0 0 0-7.1-17 8.001 8.001 0 0 1 0-11.3 8.1 8.1 0 0 1 11.4 0 40.1 40.1 0 0 1 0 56.6 7.802 7.802 0 0 1-5.7 2.3 8.004 8.004 0 0 1-7.365-4.908A7.997 7.997 0 0 1 184.9 145a23.8 23.8 0 0 0 5.262-7.785Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerSlash;

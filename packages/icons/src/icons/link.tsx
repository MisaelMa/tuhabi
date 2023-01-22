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
 * link component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const link = ({
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
        d="m127.957 77.057 19.662-19.663a36.1 36.1 0 0 1 50.991 50.982l-28.157 28.057-.021.021a35.894 35.894 0 0 1-39.201 7.817 35.908 35.908 0 0 1-11.664-7.817 7.999 7.999 0 0 0-11.313-.021 8 8 0 0 0-.022 11.313A51.893 51.893 0 0 0 145 163.016a51.904 51.904 0 0 0 36.757-15.259l.01-.011 28.28-28.179a7.71 7.71 0 0 0 .265-.278 52.1 52.1 0 0 0-73.601-73.602 7.99 7.99 0 0 0-.268.256l-19.8 19.8a8 8 0 0 0 11.314 11.314Zm-30.726 34.672a35.91 35.91 0 0 1 39.202 7.817 7.999 7.999 0 0 0 11.313.021 7.999 7.999 0 0 0 .021-11.313 51.894 51.894 0 0 0-56.673-11.3 51.9 51.9 0 0 0-16.85 11.289l-.011.011-28.28 28.179c-.09.091-.18.183-.266.278a52.1 52.1 0 0 0 73.602 73.602c.091-.084.181-.169.268-.256l19.8-19.8a8 8 0 0 0-11.314-11.314l-19.662 19.663a36.098 36.098 0 0 1-49.715-1.273 36.098 36.098 0 0 1-1.276-49.709l28.157-28.057.02-.021a35.905 35.905 0 0 1 11.664-7.817Z"
        fill={fill}
      />
    </Svg>
  );
};

export default link;

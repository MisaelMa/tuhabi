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
 * speakerSlashOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const speakerSlashOutline = ({
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
        d="M160 32a8 8 0 0 0-12.916-6.311l-39.8 31a8 8 0 0 0-1.395 11.227 8 8 0 0 0 11.227 1.395L144 48.371V106.8a8 8 0 0 0 16 0V32ZM53.92 34.619A8 8 0 0 0 42.08 45.38L73.553 80H32a16 16 0 0 0-16 16v64a16.002 16.002 0 0 0 16 16h45.255l69.833 54.315A8.002 8.002 0 0 0 160 224v-48.907l42.08 46.288a8 8 0 0 0 11.301.539 8 8 0 0 0 .539-11.301l-55.98-61.578-.038-.042L53.92 34.619ZM32 96h40v64H32V96Zm112 111.643-56-43.556V95.893l56 61.6v50.15Zm80.55-136.206a8 8 0 0 0-11.313.013 8 8 0 0 0 .013 11.313 63.914 63.914 0 0 1 13.89 69.725 63.922 63.922 0 0 1-13.89 20.749 7.999 7.999 0 0 0-.013 11.313 7.999 7.999 0 0 0 11.313.013A79.892 79.892 0 0 0 248.018 128a79.902 79.902 0 0 0-23.468-56.563Zm-39.618 28.317a8 8 0 0 1 11.314-.022A39.906 39.906 0 0 1 207.987 128a39.889 39.889 0 0 1-11.741 28.268 8 8 0 0 1-11.292-11.336 23.896 23.896 0 0 0 0-33.864 8 8 0 0 1-.022-11.314Z"
        fill={fill}
      />
    </Svg>
  );
};

export default speakerSlashOutline;

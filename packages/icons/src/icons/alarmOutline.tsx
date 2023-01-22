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
 * alarmOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const alarmOutline = ({
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
        d="M65.757 31.857a8 8 0 1 0-11.314-11.314l-33.9 33.9a8 8 0 1 0 11.314 11.314l33.9-33.9Zm124.487-11.314a8 8 0 0 1 11.313 0l33.9 33.9a8 8 0 0 1-11.313 11.314l-33.9-33.9a7.999 7.999 0 0 1 0-11.314ZM48 128c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80Zm80-96c-53.02 0-96 42.98-96 96 0 53.019 42.98 96 96 96 53.019 0 96-42.981 96-96 0-53.02-42.981-96-96-96Zm8 40a8 8 0 0 0-16 0v56a8 8 0 0 0 8 8h56a8 8 0 0 0 0-16h-48V72Z"
        fill={fill}
      />
    </Svg>
  );
};

export default alarmOutline;

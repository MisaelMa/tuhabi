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
 * paperPlaneTiltOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const paperPlaneTiltOutline = ({
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
        d="M216.458 28.078a15.902 15.902 0 0 0-8.359.13L21.79 80.684l-.034.01a16 16 0 0 0-2.431 29.96l85.547 40.475 40.475 85.547a16 16 0 0 0 29.96-2.431l.01-.034 52.474-186.309a15.894 15.894 0 0 0-4.03-15.662 15.903 15.903 0 0 0-7.303-4.16Zm-4.03 15.378L210.3 35.9l2.218 7.582.026.09.002.006a.102.102 0 0 1-.088-.015l-.004-.017-.013-.044-.013-.046ZM26.068 96.1l186.304-52.472L159.9 229.93h-.001l-.016.059-.052-.111-39.31-83.086 41.236-41.236a8 8 0 0 0-11.313-11.314l-41.236 41.236-83.087-39.31-.11-.052.058-.017Z"
        fill={fill}
      />
    </Svg>
  );
};

export default paperPlaneTiltOutline;

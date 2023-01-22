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
 * xCircle component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const xCircle = ({
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
        d="M128 24a104 104 0 1 0 104 104A104.202 104.202 0 0 0 128 24Zm37.7 130.3a8.101 8.101 0 0 1 0 11.4 8.198 8.198 0 0 1-11.4 0L128 139.3l-26.3 26.4a8.198 8.198 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4l26.4-26.3-26.4-26.3a8.1 8.1 0 0 1 11.4-11.4l26.3 26.4 26.3-26.4a8.1 8.1 0 0 1 11.4 11.4L139.3 128l26.4 26.3Z"
        fill={fill}
      />
    </Svg>
  );
};

export default xCircle;

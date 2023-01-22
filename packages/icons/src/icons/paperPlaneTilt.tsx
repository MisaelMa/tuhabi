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
 * paperPlaneTilt component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const paperPlaneTilt = ({
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
        d="m227.7 48.3-52.4 185.9a15.902 15.902 0 0 1-14.1 11.6h-1.4a16 16 0 0 1-14.4-9.1l-35.7-75.4a4.103 4.103 0 0 1 .8-4.6l51.3-51.3a7.994 7.994 0 0 0 2.057-8.899 7.998 7.998 0 0 0-10.761-4.302A8.007 8.007 0 0 0 150.5 94.1l-51.3 51.4a4.097 4.097 0 0 1-4.6.8l-75-35.5a16.595 16.595 0 0 1-9.5-15.6 15.9 15.9 0 0 1 11.7-14.5l186.3-52.5a16.002 16.002 0 0 1 17.7 6.5 16.702 16.702 0 0 1 1.9 13.6Z"
        fill={fill}
      />
    </Svg>
  );
};

export default paperPlaneTilt;

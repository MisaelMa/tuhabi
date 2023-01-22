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
 * alarm component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const alarm = ({
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
        d="m235.5 54.5-34-34a8.005 8.005 0 0 0-5.732-2.626A8 8 0 0 0 190.2 31.8l34 34a8 8 0 0 0 5.6 2.3 8.302 8.302 0 0 0 5.7-2.3 8 8 0 0 0 0-11.3Zm-169.7-34a8 8 0 0 0-11.3 0l-34 34a8 8 0 0 0 0 11.3 8.3 8.3 0 0 0 5.7 2.3 8 8 0 0 0 5.6-2.3l34-34a8 8 0 0 0 0-11.3Zm158.1 102.6c-.017.702.017 1.403.1 2.1V130.9a14.74 14.74 0 0 0-.1 2.1 95.997 95.997 0 0 1-90.9 90.9h-10a96 96 0 0 1-90.9-91.1 14.8 14.8 0 0 0-.1-2.1v-5.6c.083-.697.117-1.398.1-2.1A96 96 0 0 1 123 32.1h10a95.999 95.999 0 0 1 90.9 91ZM128 136h56a8 8 0 1 0 0-16h-48V72a8.001 8.001 0 0 0-13.657-5.657A8.001 8.001 0 0 0 120 72v56a8 8 0 0 0 8 8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default alarm;

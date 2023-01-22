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
 * football component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const football = ({
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
        d="M226 56.3A32.302 32.302 0 0 0 199.7 30c-31.4-5.3-90.4-7.7-133.9 35.8S24.7 168.3 30 199.7A32.295 32.295 0 0 0 56.3 226a206.3 206.3 0 0 0 33.3 2.8c31.1 0 69.8-7.7 100.6-38.6 43.5-43.5 41.1-102.5 35.8-133.9ZM59 210.2A15.9 15.9 0 0 1 45.8 197a178.705 178.705 0 0 1-2.7-30.6l46.5 46.5a179.479 179.479 0 0 1-30.6-2.7Zm106.7-108.5-15.1 15 9 9a8.001 8.001 0 0 1 0 11.3 8.3 8.3 0 0 1-5.7 2.3 7.995 7.995 0 0 1-5.6-2.3l-9-9-11.3 11.3 9 9a8.001 8.001 0 0 1 0 11.3 7.802 7.802 0 0 1-5.7 2.3 7.607 7.607 0 0 1-5.6-2.3l-9-9-15 15.1a8.198 8.198 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4l15.1-15-9-9a8.001 8.001 0 0 1 11.3-11.3l9 9 11.3-11.3-9-9a7.998 7.998 0 0 1 .272-11.028A8 8 0 0 1 130.3 96.4l9 9 15-15.1a8.1 8.1 0 0 1 11.4 11.4Zm.7-58.6c10.258.024 20.496.927 30.6 2.7A15.901 15.901 0 0 1 210.2 59a178.665 178.665 0 0 1 2.7 30.6l-46.5-46.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default football;

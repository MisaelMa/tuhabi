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
 * soccerBall component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const soccerBall = ({
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
        d="M231.8 134.8c.05-.398.05-.802 0-1.2.1-1.9.2-3.7.2-5.6a103.197 103.197 0 0 0-23-65.1 5.489 5.489 0 0 0-1.4-1.7 103.9 103.9 0 0 0-41.1-29.8l-1.1-.4a103.4 103.4 0 0 0-74.8 0l-1.1.4a103.9 103.9 0 0 0-41.1 29.8 5.5 5.5 0 0 0-1.4 1.7A103.2 103.2 0 0 0 24 128c0 1.9.1 3.7.2 5.6a4.8 4.8 0 0 0 0 1.2 104.2 104.2 0 0 0 15.7 48.4 9.908 9.908 0 0 0 1.1 1.7 104.3 104.3 0 0 0 60.3 43.6h.3a104.202 104.202 0 0 0 52.8 0h.3a104.3 104.3 0 0 0 60.3-43.6 9.86 9.86 0 0 0 1.1-1.7 104.19 104.19 0 0 0 15.7-48.4ZM68.5 117.1l13.2 4.3 12.7 39.2-8.1 11.2H51.7a86.202 86.202 0 0 1-11.2-34.3l28-20.4Zm119 0 28 20.4a86.208 86.208 0 0 1-11.2 34.3h-34.6l-8.1-11.2 12.7-39.2 13.2-4.3Zm5.7-48.1-10.7 32.9-13.2 4.3L136 81.9V68.1l28-20.4A87.001 87.001 0 0 1 193.2 69ZM92 47.7l28 20.4v13.8l-33.3 24.3-13.2-4.3L62.8 69A87 87 0 0 1 92 47.7Zm18 166.4-10.7-32.9 8.1-11.2h41.2l8.1 11.2-10.7 32.9a86.191 86.191 0 0 1-36 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export default soccerBall;

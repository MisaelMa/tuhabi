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
 * medal component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const medal = ({
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
        d="M77.334 23.946A87.9 87.9 0 0 1 128 8a87.898 87.898 0 0 1 84.922 111.247 87.908 87.908 0 0 1-28.922 44.553V240a8 8 0 0 1-8 8 9.388 9.388 0 0 1-3.6-.8l-44.4-22.3-44.4 22.3a7.995 7.995 0 0 1-7.8-.4 7.893 7.893 0 0 1-3.8-6.8v-76.2a87.9 87.9 0 0 1 5.332-139.854ZM88 155.866A72.004 72.004 0 0 0 128 168a72.098 72.098 0 0 0 72-72 72.004 72.004 0 0 0-44.447-66.52A72 72 0 0 0 88 155.867ZM184 96c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56Z"
        fill={fill}
      />
    </Svg>
  );
};

export default medal;

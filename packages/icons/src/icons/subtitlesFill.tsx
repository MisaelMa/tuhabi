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
 * subtitlesFill component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const subtitlesFill = ({
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
        d="M223.5 47.5h-191a17 17 0 0 0-17 17v127a17 17 0 0 0 17 17h191a17 17 0 0 0 17-17v-127a17 17 0 0 0-17-17ZM64 136h-8a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 56 120h8a8.001 8.001 0 0 1 5.657 13.657A8.001 8.001 0 0 1 64 136Zm96 32H56a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 56 152h104a8 8 0 1 1 0 16Zm40 0h-8a8 8 0 1 1 0-16h8a8 8 0 1 1 0 16Zm0-32H96a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 96 120h104a8 8 0 1 1 0 16Z"
        fill={fill}
      />
    </Svg>
  );
};

export default subtitlesFill;

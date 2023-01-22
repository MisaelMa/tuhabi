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
 * medalOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const medalOutline = ({
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
        d="M128 24c-39.764 0-72 32.236-72 72 0 23.461 11.221 44.302 28.59 57.447.142.1.28.204.416.312C97.004 162.705 111.884 168 128 168s30.996-5.295 42.994-14.241c.135-.108.274-.212.416-.312C188.779 140.302 200 119.461 200 96c0-39.764-32.235-72-72-72Zm56 139.885c19.544-16.14 32-40.558 32-67.885 0-48.601-39.399-88-88-88S40 47.399 40 96c0 27.327 12.456 51.745 32 67.885V240a7.998 7.998 0 0 0 11.578 7.155L128 224.944l44.422 22.211A8 8 0 0 0 184 240v-76.115Zm-16 10.52C155.999 180.54 142.404 184 128 184s-27.999-3.46-40-9.595v52.651l36.422-18.211a7.996 7.996 0 0 1 7.156 0L168 227.056v-52.651ZM128 56c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40ZM72 96c0-30.928 25.072-56 56-56s56 25.072 56 56-25.072 56-56 56-56-25.072-56-56Z"
        fill={fill}
      />
    </Svg>
  );
};

export default medalOutline;

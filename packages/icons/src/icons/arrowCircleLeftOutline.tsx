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
 * arrowCircleLeftOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowCircleLeftOutline = ({
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
        d="M128 40c-48.601 0-88 39.399-88 88s39.399 88 88 88 88-39.399 88-88-39.399-88-88-88ZM24 128C24 70.562 70.562 24 128 24s104 46.562 104 104-46.562 104-104 104S24 185.438 24 128Zm103.557-39.557a8 8 0 0 1 0 11.314L107.314 120H168a8 8 0 0 1 0 16h-60.686l20.243 20.243a8 8 0 0 1-11.314 11.314l-33.9-33.9A7.97 7.97 0 0 1 80 128c0-2.221.906-4.231 2.368-5.681l33.875-33.876a8 8 0 0 1 11.314 0Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowCircleLeftOutline;

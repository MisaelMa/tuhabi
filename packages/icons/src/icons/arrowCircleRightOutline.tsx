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
 * arrowCircleRightOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowCircleRightOutline = ({
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
        d="M128 40c-48.601 0-88 39.399-88 88s39.399 88 88 88 88-39.399 88-88-39.399-88-88-88ZM24 128C24 70.562 70.562 24 128 24s104 46.562 104 104-46.562 104-104 104S24 185.438 24 128Zm115.757-39.557a8 8 0 0 0-11.314 11.314L148.686 120H88a8 8 0 0 0 0 16h60.686l-20.243 20.243a8 8 0 0 0 11.314 11.314l33.9-33.9a7.973 7.973 0 0 0 2.334-5.285 8.024 8.024 0 0 0-.57-3.367 7.981 7.981 0 0 0-1.73-2.627m-33.934-33.935 33.895 33.895Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowCircleRightOutline;

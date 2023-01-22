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
 * checkCircleOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const checkCircleOutline = ({
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
        d="M40 128c0-48.601 39.399-88 88-88s88 39.399 88 88-39.399 88-88 88-88-39.399-88-88Zm88-104C70.562 24 24 70.562 24 128s46.562 104 104 104 104-46.562 104-104S185.438 24 128 24Zm49.522 85.788a8 8 0 0 0 .266-11.31 8 8 0 0 0-11.31-.266l-53.173 50.727-23.778-22.723a8 8 0 0 0-11.054 11.568l29.3 28a8 8 0 0 0 11.049.004l58.7-56Z"
        fill={fill}
      />
    </Svg>
  );
};

export default checkCircleOutline;

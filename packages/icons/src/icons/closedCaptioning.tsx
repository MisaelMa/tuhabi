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
 * closedCaptioning component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const closedCaptioning = ({
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
        d="M216 40H40a16 16 0 0 0-16 16v144a16.002 16.002 0 0 0 16 16h176c4.243 0 8.313-1.686 11.314-4.686 3-3.001 4.686-7.071 4.686-11.314V56a16.002 16.002 0 0 0-16-16ZM96 148a19.793 19.793 0 0 0 14.3-6 8.002 8.002 0 0 1 11.4 11.2A35.399 35.399 0 0 1 96 164a36.001 36.001 0 0 1 0-72 35.402 35.402 0 0 1 25.7 10.8 8.002 8.002 0 0 1-5.848 13.323A8.004 8.004 0 0 1 110.3 114a19.797 19.797 0 0 0-14.3-6 19.999 19.999 0 1 0 0 40Zm72 0a19.792 19.792 0 0 0 14.3-6 8.002 8.002 0 0 1 11.4 11.2A35.399 35.399 0 0 1 168 164a36 36 0 1 1 0-72 35.402 35.402 0 0 1 25.7 10.8 8.002 8.002 0 0 1-5.848 13.323A8.004 8.004 0 0 1 182.3 114a19.797 19.797 0 0 0-14.3-6 20 20 0 0 0 0 40Z"
        fill={fill}
      />
    </Svg>
  );
};

export default closedCaptioning;

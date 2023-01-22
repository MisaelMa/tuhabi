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
 * envelopeOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const envelopeOutline = ({
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
        d="M24 56a8 8 0 0 1 8-8h192a8 8 0 0 1 8 8v136c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 216 208H40a16.002 16.002 0 0 1-16-16V56Zm28.566 8L128 133.147 203.434 64H52.566ZM216 74.186l-58.685 53.795L216 181.801V74.186ZM203.449 192l-57.973-53.167-12.07 11.064a8 8 0 0 1-10.812 0l-12.07-11.064L52.551 192H203.45ZM40 181.801l58.685-53.82L40 74.186V181.8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default envelopeOutline;

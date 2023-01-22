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
 * imageOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const imageOutline = ({
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
        d="M40 40c-8.837 0-16 7.163-16 16v144c0 8.837 7.163 16 16 16h176c8.837 0 16-7.163 16-16V56c0-8.837-7.163-16-16-16H40Zm0 160v-28.686l47.957-47.957.043-.043 44.625 44.625A16.011 16.011 0 0 0 144 172.687a16.011 16.011 0 0 0 11.375-4.748l.025-.026 20.557-20.556.043-.043 40 40V200H40ZM216 56v108.686l-28.626-28.625A15.991 15.991 0 0 0 176 131.313a15.987 15.987 0 0 0-11.374 4.748l-20.583 20.582-.043.043-44.625-44.625A16.014 16.014 0 0 0 88 107.313a15.99 15.99 0 0 0-11.376 4.749L40 148.686V56h176Zm-48 44c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12Z"
        fill={fill}
      />
    </Svg>
  );
};

export default imageOutline;

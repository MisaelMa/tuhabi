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
 * instagramLogoOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const instagramLogoOutline = ({
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
        d="M84 44c-22.091 0-40 17.909-40 40v88c0 22.091 17.909 40 40 40h88c22.091 0 40-17.909 40-40V84c0-22.091-17.909-40-40-40H84ZM28 84c0-30.928 25.072-56 56-56h88c30.928 0 56 25.072 56 56v88c0 30.928-25.072 56-56 56H84c-30.928 0-56-25.072-56-56V84Zm100 12c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32Zm-48 32c0-26.51 21.49-48 48-48s48 21.49 48 48-21.49 48-48 48-48-21.49-48-48Zm112-52c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12Z"
        fill={fill}
      />
    </Svg>
  );
};

export default instagramLogoOutline;

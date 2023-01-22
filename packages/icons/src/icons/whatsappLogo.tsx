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
 * whatsappLogo component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const whatsappLogo = ({
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
        d="M76.495 37.645A104 104 0 0 1 128 24a104.003 104.003 0 0 1 101.817 82.87A104.001 104.001 0 0 1 78 219.2l-30 8.5a15.894 15.894 0 0 1-15.672-4.028A15.894 15.894 0 0 1 28.3 208l8.5-30A104.002 104.002 0 0 1 76.495 37.645ZM152 192h.1a35.997 35.997 0 0 0 35.9-36 14.902 14.902 0 0 0-7.5-12.9L160 131.4a15.801 15.801 0 0 0-16.1.2l-11.9 7.1a41.401 41.401 0 0 1-14.7-14.7l7.1-11.9a15.793 15.793 0 0 0 .2-16.1l-11.7-20.5A14.905 14.905 0 0 0 100 68a36 36 0 0 0-36 35.9 88.101 88.101 0 0 0 88 88.1Zm-19.151-36.204a8.1 8.1 0 0 0 3.651-1.096l15.6-9.4 19.9 11.3a19.898 19.898 0 0 1-19.9 19.4h-.1a72.008 72.008 0 0 1-50.947-21.124A71.995 71.995 0 0 1 80 103.9 19.9 19.9 0 0 1 99.4 84l11.3 19.9-9.4 15.6a8.104 8.104 0 0 0-.4 7.4 55.396 55.396 0 0 0 28.2 28.2 8.106 8.106 0 0 0 3.749.696Z"
        fill={fill}
      />
    </Svg>
  );
};

export default whatsappLogo;

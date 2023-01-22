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
 * whatsappLogoOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const whatsappLogoOutline = ({
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
        d="M133.395 40.375A87.9 87.9 0 0 0 52.282 172.92a8 8 0 0 1 .815 6.258l-9.37 33.093 33.093-9.369a7.997 7.997 0 0 1 6.259.815 87.901 87.901 0 0 0 114.247-21.707 87.903 87.903 0 0 0-7.274-116.063 87.902 87.902 0 0 0-56.657-25.573Zm-69.219 5.661a103.9 103.9 0 1 1 13.777 173.175l-29.946 8.479a15.905 15.905 0 0 1-15.668-4.029 15.904 15.904 0 0 1-4.029-15.668l8.479-29.946a103.9 103.9 0 0 1 27.387-132.01ZM99.365 84.01A20 20 0 0 0 80 103.927 71.901 71.901 0 0 0 152.06 176a20.103 20.103 0 0 0 19.928-19.366l-19.808-11.361a.102.102 0 0 0-.091.004c-.001 0 .001-.001 0 0l-15.678 9.387a8.004 8.004 0 0 1-7.39.433 56.002 56.002 0 0 1-28.116-28.117 8.001 8.001 0 0 1 .432-7.39l9.386-15.676c.001 0 0 .001 0 0a.107.107 0 0 0 .014-.049.112.112 0 0 0-.009-.044l-11.362-19.81ZM99.973 68a14.8 14.8 0 0 1 12.99 7.56l11.714 20.425a16.1 16.1 0 0 1-.199 16.101l-.014.024-7.128 11.905a39.994 39.994 0 0 0 14.65 14.649l11.905-7.128.024-.014a16.095 16.095 0 0 1 16.1-.199l.066.037 20.361 11.678A14.805 14.805 0 0 1 188 156.046v.018l-8-.064 8 .028v.018A36.102 36.102 0 0 1 152.157 192h-.037a87.908 87.908 0 0 1-81.471-54.364A87.9 87.9 0 0 1 64 103.88v-.009A36 36 0 0 1 99.973 68Zm0 0h-.037l.064 8v-8h-.027Z"
        fill={fill}
      />
    </Svg>
  );
};

export default whatsappLogoOutline;

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
 * soccerBallOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const soccerBallOutline = ({
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
        d="M110.851 41.67A88.437 88.437 0 0 1 128 40c5.868 0 11.602.574 17.149 1.67L128 54.115 110.851 41.67ZM40.917 184.877C59.49 213.254 91.555 232 128 232s68.512-18.747 87.084-47.124a8.044 8.044 0 0 0 1.015-1.582 103.39 103.39 0 0 0 15.652-48.048c.14-.712.181-1.437.126-2.153A104.9 104.9 0 0 0 232 128c0-57.438-46.562-104-104-104S24 70.562 24 128c0 1.708.041 3.406.122 5.093a8.004 8.004 0 0 0 .127 2.153A103.394 103.394 0 0 0 39.9 183.293a7.983 7.983 0 0 0 1.017 1.584Zm174.475-67.274a87.41 87.41 0 0 0-10.583-32.581l-6.512 20.126 17.095 12.455Zm-22.184-48.697a88.242 88.242 0 0 0-29.138-21.198L136 68.08v13.846l33.309 24.21 13.238-4.287 10.661-32.942Zm-5.723 48.161-13.232 4.285-12.691 39.243 8.12 11.205h34.66a87.428 87.428 0 0 0 11.154-34.325l-28.011-20.408Zm-30.754 64.128L148.618 170h-41.235l-8.114 11.195 10.748 32.966A88.408 88.408 0 0 0 128 216c6.163 0 12.178-.633 17.983-1.839l10.748-32.966Zm8.109 26.746a88.237 88.237 0 0 0 27.72-20.141h-21.154l-6.566 20.141ZM63.44 187.8a88.236 88.236 0 0 0 27.72 20.141L84.593 187.8H63.44Zm22.878-16 8.12-11.204-12.692-39.245-13.231-4.284-28.01 20.408A87.432 87.432 0 0 0 51.656 171.8h34.661Zm-12.865-69.952 13.237 4.287L120 81.925V68.078l-28.07-20.37a88.242 88.242 0 0 0-29.138 21.197l10.66 32.942ZM51.19 85.022a87.42 87.42 0 0 0-10.583 32.581l17.095-12.455-6.512-20.126ZM109.12 154l-11.623-35.94L128 95.89l30.502 22.17L146.879 154H109.12Z"
        fill={fill}
      />
    </Svg>
  );
};

export default soccerBallOutline;

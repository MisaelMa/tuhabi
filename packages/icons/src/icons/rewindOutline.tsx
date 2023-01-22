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
 * rewindOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const rewindOutline = ({
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
        d="M104.68 55.056a16.877 16.877 0 0 0-3.608 1.288c-1.008.52-21.816 13.76-46.232 29.44C6.296 116.952 5.664 117.4 3.872 122.24a17.544 17.544 0 0 0-.024 11.448c1.864 4.984 1.864 4.984 49.056 35.32 23.824 15.312 44.48 28.552 45.904 29.432 4.696 2.88 8.936 3.592 13.432 2.264 4.912-1.456 8.064-4.216 10.368-9.08l1.336-2.824.128-22.936c.072-12.608.192-22.928.28-22.928.08 0 19.696 12.6 43.6 27.992 23.904 15.4 44.52 28.504 45.808 29.12 1.984.944 2.936 1.112 6.184 1.12 3.416 0 4.152-.144 6.616-1.32 3.52-1.672 6.176-4.32 7.856-7.848l1.32-2.776V66.776L234.416 64a16.111 16.111 0 0 0-7.784-7.784c-2.544-1.248-3.192-1.384-6.464-1.36-2.592.024-4.248.272-5.768.88-1.176.472-21.872 13.568-45.992 29.096a7420.972 7420.972 0 0 1-44.04 28.232c-.088 0-.224-10.32-.296-22.928l-.128-22.936-1.32-2.792c-2.328-4.912-5.768-7.872-10.608-9.136a14.433 14.433 0 0 0-7.336-.216Zm3.16 101.544-.104 28.592-44.16-28.408c-24.288-15.624-44.208-28.536-44.264-28.704-.056-.16 19.816-13.104 44.16-28.768l44.264-28.48.104 28.584c.064 15.72.064 41.456 0 57.184Zm111.792-.064-.112 28.536-44.216-28.432c-27.888-17.928-44.072-28.584-43.832-28.84.216-.232 20.112-13.112 44.216-28.624l43.832-28.208.112 28.52c.056 15.68.056 41.352 0 57.048"
        fill={fill}
      />
    </Svg>
  );
};

export default rewindOutline;

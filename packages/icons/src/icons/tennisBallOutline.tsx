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
 * tennisBallOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const tennisBallOutline = ({
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
        d="M127.808 24H128c57.438 0 104 46.562 104 104v.3c-.162 57.21-46.517 103.555-103.732 103.7H128c-57.438 0-104-46.562-104-104v-.278C24.15 70.504 70.507 24.148 127.726 24h.082Zm8.805 191.584c41.725-4.053 74.918-37.246 78.971-78.971a87.905 87.905 0 0 0-78.971 78.971Zm79.075-95.043a103.897 103.897 0 0 0-95.147 95.147c-42.651-3.579-76.65-37.578-80.23-80.229a103.897 103.897 0 0 0 95.148-95.147c42.651 3.58 76.649 37.578 80.229 80.229Zm-175.272-1.154c4.053-41.725 37.246-74.918 78.971-78.97a87.905 87.905 0 0 1-78.97 78.97Z"
        fill={fill}
      />
    </Svg>
  );
};

export default tennisBallOutline;

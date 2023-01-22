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
 * baseballOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const baseballOutline = ({
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
        d="M60.002 72.137C47.504 87.332 40 106.79 40 128c0 21.202 7.498 40.653 19.988 55.846a107.21 107.21 0 0 0 2.839-3.582 8 8 0 0 1 12.746 9.672 123.19 123.19 0 0 1-4.295 5.346C86.595 208.209 106.388 216 128 216c21.612 0 41.405-7.791 56.722-20.718a123.328 123.328 0 0 1-4.295-5.346 8 8 0 1 1 12.746-9.672 107.72 107.72 0 0 0 2.839 3.582C208.502 168.653 216 149.202 216 128c0-21.21-7.504-40.668-20.002-55.864a96.286 96.286 0 0 0-2.792 3.555 7.999 7.999 0 0 1-11.197 1.615 8 8 0 0 1-1.616-11.197 111.569 111.569 0 0 1 4.311-5.407C169.389 47.785 149.604 40 128 40s-41.389 7.785-56.704 20.702c1.492 1.757 2.93 3.56 4.31 5.407a8 8 0 1 1-12.812 9.582 95.947 95.947 0 0 0-2.792-3.554Zm-6.119-17.094C35.403 73.816 24 99.576 24 128c0 28.423 11.402 54.183 29.882 72.956a8.01 8.01 0 0 0 .942.944C73.614 220.508 99.465 232 128 232c28.535 0 54.386-11.492 73.177-30.101a7.969 7.969 0 0 0 .939-.942C220.597 182.185 232 156.424 232 128c0-28.424-11.403-54.186-29.884-72.958a8.242 8.242 0 0 0-.939-.941C182.386 35.492 156.535 24 128 24c-28.534 0-54.385 11.492-73.176 30.1a8.105 8.105 0 0 0-.941.943Zm121.67 34.875a8 8 0 0 1 5.029 10.135 86.668 86.668 0 0 0-3.479 14.19 8 8 0 0 1-15.806-2.486 102.767 102.767 0 0 1 4.121-16.81 8 8 0 0 1 10.135-5.029Zm1.55 51.839a8 8 0 0 0-15.806 2.486 102.775 102.775 0 0 0 4.121 16.81 8 8 0 0 0 15.164-5.106 86.668 86.668 0 0 1-3.479-14.19ZM80.447 89.918a8 8 0 0 1 10.135 5.03 102.675 102.675 0 0 1 4.12 16.809 8 8 0 0 1-15.805 2.486 86.709 86.709 0 0 0-3.479-14.19 8 8 0 0 1 5.03-10.135Zm14.256 54.325a8 8 0 0 0-15.806-2.486 86.709 86.709 0 0 1-3.479 14.19 8 8 0 0 0 15.164 5.106 102.683 102.683 0 0 0 4.12-16.81Z"
        fill={fill}
      />
    </Svg>
  );
};

export default baseballOutline;

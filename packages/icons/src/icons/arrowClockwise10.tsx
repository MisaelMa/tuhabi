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
 * arrowClockwise10 component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill = BLACK] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowClockwise10 = ({
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
        d="M97.35 54.083a80 80 0 0 1 87.191 17.372l.01.01L212.869 99.7H176.2a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-16 0v20.727l-20.341-20.282-.004-.004a96.001 96.001 0 1 0 .004 135.714 8 8 0 0 0-11.318-11.309 80.004 80.004 0 0 1-87.191 17.371A79.997 79.997 0 0 1 47.95 128a80 80 0 0 1 49.4-73.917ZM95.466 96.79A8 8 0 0 1 100 104v48a8 8 0 0 1-16 0v-31.355l-7.002 5.602a8 8 0 1 1-9.996-12.494l20-16a8 8 0 0 1 8.464-.963ZM128 128c0-5.268 1.438-9.676 3.343-12.533 1.942-2.913 3.746-3.467 4.657-3.467s2.715.554 4.657 3.467C142.562 118.324 144 122.732 144 128s-1.438 9.676-3.343 12.533C138.715 143.446 136.911 144 136 144s-2.715-.554-4.657-3.467C129.438 137.676 128 133.268 128 128Zm8-32c-7.925 0-14.121 4.818-17.97 10.592-3.886 5.829-6.03 13.421-6.03 21.408 0 7.987 2.144 15.579 6.03 21.408C121.879 155.182 128.075 160 136 160c7.925 0 14.121-4.818 17.97-10.592 3.886-5.829 6.03-13.421 6.03-21.408 0-7.987-2.144-15.579-6.03-21.408C150.121 100.818 143.925 96 136 96Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowClockwise10;

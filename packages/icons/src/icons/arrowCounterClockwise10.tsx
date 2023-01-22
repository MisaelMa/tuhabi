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
 * arrowCounterClockwise10 component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill = BLACK] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowCounterClockwise10 = ({
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
        d="M164.77 39.3A96 96 0 0 0 60.146 60.14l-.005.005L39.8 80.427V51.7a8 8 0 1 0-16 0v48a7.982 7.982 0 0 0 2.335 5.649 7.98 7.98 0 0 0 5.704 2.351 7.974 7.974 0 0 0 5.61-2.335L51.153 91.7l20.294-20.235.011-.01a80 80 0 1 1 0 113.091 8 8 0 0 0-11.318 11.309A96.002 96.002 0 0 0 224.05 128a96.002 96.002 0 0 0-59.281-88.7Zm-45.304 57.49A8.001 8.001 0 0 1 124 104v48a8 8 0 0 1-16 0v-31.355l-7.002 5.602a8 8 0 0 1-9.996-12.494l20-16a8.002 8.002 0 0 1 8.464-.963ZM152 128c0-5.268 1.438-9.676 3.343-12.533 1.942-2.913 3.746-3.467 4.657-3.467s2.715.554 4.657 3.467C166.562 118.324 168 122.732 168 128s-1.438 9.676-3.343 12.533C162.715 143.446 160.911 144 160 144s-2.715-.554-4.657-3.467C153.438 137.676 152 133.268 152 128Zm8-32c-7.925 0-14.121 4.818-17.97 10.592-3.886 5.829-6.03 13.421-6.03 21.408 0 7.987 2.144 15.579 6.03 21.408C145.879 155.182 152.075 160 160 160c7.925 0 14.121-4.818 17.97-10.592 3.886-5.829 6.03-13.421 6.03-21.408 0-7.987-2.144-15.579-6.03-21.408C174.121 100.818 167.925 96 160 96Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowCounterClockwise10;

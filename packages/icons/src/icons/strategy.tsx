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
 * strategy component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const strategy = ({
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
        d="M128 40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16h-20.686l2.343 2.343c22.268 22.269 24.936 47.634 16.799 68.557-7.873 20.244-25.821 36.187-44.516 40.861a7.999 7.999 0 0 1-9.701-5.821 7.999 7.999 0 0 1 5.821-9.701c13.305-3.326 27.357-15.383 33.484-31.139 5.863-15.077 4.531-33.712-13.201-51.443L144 59.314V80a8 8 0 0 1-16 0V40ZM34.343 66.343a8 8 0 0 1 11.314 0L60 80.686l14.343-14.343a8 8 0 0 1 11.314 11.314L71.314 92l14.343 14.343a8 8 0 0 1-11.314 11.314L60 103.314l-14.343 14.343a8 8 0 0 1-11.314-11.314L48.686 92 34.343 77.657a8 8 0 0 1 0-11.314ZM68 168c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20Zm-36 20c0-19.882 16.118-36 36-36s36 16.118 36 36-16.118 36-36 36-36-16.118-36-36Zm178.343-25.657a8 8 0 0 1 11.314 11.314L207.314 188l14.343 14.343a8 8 0 0 1-11.314 11.314L196 199.314l-14.343 14.343a8 8 0 0 1-11.314-11.314L184.686 188l-14.343-14.343a8 8 0 0 1 11.314-11.314L196 176.686l14.343-14.343Z"
        fill={fill}
      />
    </Svg>
  );
};

export default strategy;

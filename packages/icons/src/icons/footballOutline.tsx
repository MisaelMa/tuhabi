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
 * footballOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const footballOutline = ({
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
        d="M77.064 77.05c20.472-20.522 45.325-29.364 68.216-32.456l66.091 66.091c-3.107 22.877-11.953 47.73-32.428 68.258-20.527 20.475-45.381 29.321-68.258 32.428l-66.056-66.056c3.107-22.88 11.955-47.736 32.435-68.265ZM28.33 146.764a8.018 8.018 0 0 0-.124 1.122c-2.21 20.785-.292 39.438 1.805 51.842a32 32 0 0 0 26.256 26.26c12.404 2.097 31.059 4.016 51.846 1.806a8.032 8.032 0 0 0 1.125-.124c26.497-2.997 56.315-12.768 81.012-37.406l.014-.014c24.637-24.697 34.409-54.513 37.406-81.009.068-.375.11-.753.124-1.132 2.209-20.782.292-39.434-1.805-51.837a32 32 0 0 0-26.255-26.26c-28.361-4.795-89.595-8.772-133.998 35.738-24.638 24.698-34.41 54.516-37.407 81.014Zm61.14 66.02c-11.831.016-22.388-1.194-30.536-2.572l-.01-.002a15.997 15.997 0 0 1-13.134-13.133l-.002-.011c-1.377-8.148-2.588-18.705-2.572-30.536l46.255 46.254ZM212.784 89.47l-46.273-46.273c11.838-.006 22.403 1.213 30.555 2.591l.011.002a16 16 0 0 1 13.133 13.133l.002.01c1.378 8.149 2.588 18.705 2.572 30.537Zm-47.127 12.187a8 8 0 0 0-11.314-11.314L139.3 105.386l-8.943-8.943a8 8 0 0 0-11.314 11.314l8.943 8.943-11.286 11.286-8.944-8.943a8 8 0 1 0-11.313 11.314l8.943 8.943-15.043 15.043a8 8 0 0 0 11.314 11.314l15.043-15.043 8.943 8.943a8 8 0 0 0 11.313 0 7.999 7.999 0 0 0 0-11.314l-8.942-8.943 11.286-11.286 8.943 8.943a8 8 0 0 0 11.314-11.314l-8.943-8.943 15.043-15.043Z"
        fill={fill}
      />
    </Svg>
  );
};

export default footballOutline;

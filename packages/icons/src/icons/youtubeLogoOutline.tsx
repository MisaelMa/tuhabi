import {
  HEIGHT_SIZE_DEFAULT,
  VIEWBOX_DEFAULT,
  WIDTH_SIZE_DEFAULT,
} from '../constants/iconSize';
import { Path, Svg } from '../components/Svg/svgWithProps';

import { BLACK } from '@ammc/commons/constants/colors';
import IIconProps from '../components/Icon/IIcon';
import React from 'react';

/**
 * youtubeLogoOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const youtubeLogoOutline = ({
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
        d="M127.988 40.4h-.637c-.436 0-1.071.004-1.886.013-1.629.017-3.98.056-6.9.144-5.836.175-13.969.544-23.175 1.322-18.211 1.537-41.396 4.728-59.245 11.548l-.118.046a24.102 24.102 0 0 0-14.37 16.316l-.008.03C19.158 79.568 16 97.645 16 128c0 30.355 3.158 48.432 5.65 58.181l.007.03a24.103 24.103 0 0 0 14.37 16.316l.118.046c17.85 6.82 41.034 10.011 59.244 11.549a433.71 433.71 0 0 0 23.176 1.321c2.92.088 5.271.127 6.9.145.815.008 1.45.011 1.886.012l.502.001.135-.001h.024l.135.001.502-.001c.436-.001 1.071-.004 1.886-.012 1.629-.018 3.98-.057 6.9-.145a433.753 433.753 0 0 0 23.176-1.321c18.21-1.538 41.395-4.729 59.244-11.549l.118-.046a24.105 24.105 0 0 0 14.37-16.316l.008-.03C236.842 176.432 240 158.355 240 128c0-30.355-3.158-48.432-5.649-58.18l-.008-.03a24.097 24.097 0 0 0-14.37-16.317l-.118-.046c-17.849-6.82-41.034-10.011-59.244-11.548a433.651 433.651 0 0 0-23.176-1.322c-2.92-.088-5.271-.127-6.9-.144-.815-.009-1.45-.012-1.886-.013h-.661Zm-.03 159.2h.111l.105.001.44-.001c.393 0 .983-.003 1.751-.012a340.79 340.79 0 0 0 6.59-.137 417.805 417.805 0 0 0 22.309-1.273c17.889-1.51 39.169-4.562 54.813-10.525a8.105 8.105 0 0 0 4.777-5.451C220.962 173.944 224 157.225 224 128c0-29.224-3.038-45.944-5.146-54.202a8.102 8.102 0 0 0-4.777-5.45c-15.644-5.963-36.924-9.016-54.813-10.526a417.574 417.574 0 0 0-22.309-1.272 342.885 342.885 0 0 0-6.59-.138c-.768-.008-1.358-.011-1.751-.012h-1.228c-.393 0-.983.004-1.751.012-1.537.016-3.784.053-6.59.138-5.618.168-13.454.524-22.31 1.272-17.888 1.51-39.168 4.563-54.812 10.525a8.1 8.1 0 0 0-4.777 5.451C35.038 82.056 32 98.776 32 128c0 29.225 3.038 45.944 5.146 54.202a8.103 8.103 0 0 0 4.777 5.451c15.644 5.963 36.924 9.015 54.813 10.525a417.848 417.848 0 0 0 22.309 1.273c2.806.084 5.053.121 6.59.137.768.009 1.358.012 1.751.012l.44.001.105-.001h.027ZM108.225 88.947a8.001 8.001 0 0 1 8.213.397l48 32a8 8 0 0 1 0 13.313l-48 32A8 8 0 0 1 104 160V96a8 8 0 0 1 4.225-7.053ZM120 110.948v34.104L145.578 128 120 110.948Z"
        fill={fill}
      />
    </Svg>
  );
};

export default youtubeLogoOutline;

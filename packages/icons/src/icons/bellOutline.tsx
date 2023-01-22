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
 * bellOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const bellOutline = ({
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
        d="M121.6 24.328c-34.064 2.288-63.12 26.216-71.704 59.04-2.16 8.256-2.528 12.024-2.952 30.128-.4 17.44-1.048 24.888-3.016 34.744-1.904 9.528-5.096 18.912-8.728 25.68-2.6 4.824-3.368 7.712-3.056 11.424.488 5.848 4.552 11.36 9.992 13.56 2.432.984 2.584.992 24.056 1.112l21.608.128.288 2.864c2.632 25.808 26.728 42.368 51.296 35.248 15.648-4.536 26.8-18.312 28.528-35.256l.288-2.864 20.544-.12c20.392-.12 20.552-.128 23.008-1.12 3.456-1.392 7.088-4.864 8.664-8.272 1.088-2.36 1.24-3.16 1.24-6.728v-4.056l-3.28-6.824c-8.232-17.176-10.736-30.28-11.432-59.952-.472-19.864-1.104-24.392-4.928-35.384-3.768-10.824-9.648-20.288-18.088-29.128a79.918 79.918 0 0 0-41.256-22.92c-3.568-.728-14.792-1.888-16.168-1.672-.232.04-2.44.208-4.904.368Zm18.008 17.04a63.595 63.595 0 0 1 33.304 18.776 66.321 66.321 0 0 1 16.032 29.728c1.312 5.656 1.776 11.12 1.776 20.8 0 29.104 4.76 53.912 13.408 69.808.824 1.528 1.512 2.92 1.512 3.096.008.176-35.424.32-78.744.32-43.312 0-78.688-.144-78.608-.32.08-.176.84-1.664 1.688-3.312 8.616-16.64 13.16-40.12 13.176-68.048.008-18.568 1.6-26.656 7.464-37.888a63.573 63.573 0 0 1 37.6-31.384c3-.936 7.344-1.88 11.888-2.576 3.176-.48 15.464.144 19.504 1Zm12.12 161.528c-.4 3.856-1.888 7.696-4.288 11.056-5.824 8.168-15.736 11.72-25.632 9.192-9.336-2.384-16.688-10.896-17.576-20.352l-.248-2.688h48.024l-.28 2.792"
        fill={fill}
      />
    </Svg>
  );
};

export default bellOutline;

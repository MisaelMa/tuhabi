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
 * fastForwardOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const fastForwardOutline = ({
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
        d="M31.312 55.36c-4.304 1.4-8.552 5.296-10.184 9.344L20.2 67v122l.936 2.312c1.304 3.24 4.632 6.728 7.992 8.384 2.488 1.224 2.92 1.304 6.864 1.304 3.72 0 4.464-.12 6.408-1.048 1.208-.576 21.816-13.688 45.8-29.128l43.6-28.072.2 23.12c.2 23.08.2 23.136 1.136 25.44 1.304 3.24 4.632 6.728 7.992 8.384 2.488 1.224 2.92 1.304 6.864 1.304 3.712 0 4.464-.12 6.408-1.048 3.288-1.568 92.36-59 94.128-60.688a20.072 20.072 0 0 0 3-4.44c1.384-2.816 1.472-3.2 1.472-6.824 0-3.64-.08-4-1.52-6.912-1.048-2.12-2.104-3.576-3.4-4.68-2.344-2.008-90.672-58.904-93.68-60.352-1.952-.936-2.68-1.056-6.408-1.056-3.944 0-4.376.08-6.864 1.304-3.36 1.656-6.688 5.144-7.992 8.384L132.2 67l-.112 23.104c-.064 12.704-.184 23.096-.264 23.096-.08 0-19.92-12.72-44.08-28.264-24.16-15.544-44.736-28.624-45.736-29.072-2.296-1.032-8.216-1.312-10.696-.504ZM81.92 100.2c23.584 15.176 42.832 27.728 42.776 27.88-.088.248-86.248 55.832-87.992 56.776-.672.352-.704-2.48-.704-56.864v-57.24l1.528.928c.832.504 20.816 13.344 44.392 28.52Zm112 0c23.584 15.176 42.832 27.728 42.776 27.88-.088.248-86.248 55.832-87.992 56.776-.672.352-.704-2.48-.704-56.864v-57.24l1.528.928c.832.504 20.816 13.344 44.392 28.52Z"
        fill={fill}
      />
    </Svg>
  );
};

export default fastForwardOutline;

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
 * facebookLogoOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const facebookLogoOutline = ({
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
        d="M120.744 24.32a103.904 103.904 0 0 0-85.992 57.816 107.894 107.894 0 0 0-9.856 31.784c-1.032 6.784-1.032 21.376 0 28.16 4.76 31.368 21.888 57.696 48.352 74.328 11.472 7.208 26.04 12.48 40.672 14.696 6.784 1.032 21.376 1.032 28.16 0 22.4-3.4 41.936-12.864 57.656-27.928 17.072-16.36 27.728-37.112 31.368-61.096 1.032-6.784 1.032-21.376 0-28.16-4.728-31.136-21.768-57.48-47.888-74.04-8.792-5.568-22.6-11.232-32.6-13.368a115.737 115.737 0 0 0-29.872-2.192Zm21.336 16.832c19.112 3.24 36.248 12.256 49.36 25.976 12.552 13.128 20.416 28.936 23.472 47.184 1.064 6.32 1.064 21.056 0 27.376-4.288 25.592-18.944 47.68-40.528 61.08-10.424 6.48-24.352 11.4-35.4 12.528l-2.88.288v-63.656l13.84-.128c13.296-.112 13.88-.152 15.04-1.016 3.496-2.608 4.12-9 1.216-12.448-1.712-2.032-3.224-2.232-17.24-2.232h-12.856l.008-13.328c.008-14.84.128-15.736 2.768-19.704 1.768-2.672 3.528-4.12 6.936-5.704 2.416-1.12 2.608-1.144 13.968-1.36 10.352-.2 11.656-.304 12.872-1.04 4.168-2.52 4.432-10.736.432-13.664-1.136-.832-1.856-.888-13.056-1-13.488-.144-16.016.176-21.312 2.688-8.312 3.944-14 10.152-16.88 18.4-1.68 4.808-1.944 7.68-1.944 21.592v13.12H107.04c-8.624 0-13.416.168-14.536.504-5.28 1.584-6.232 10.632-1.488 14.176 1.16.864 1.744.904 15.04 1.016l13.84.128v63.656l-2.88-.288c-11.048-1.128-24.976-6.048-35.4-12.528-18.744-11.632-33.032-30.88-38.552-51.904-2.208-8.424-2.736-12.824-2.736-22.864 0-10.04.528-14.44 2.736-22.864 6.224-23.712 23.328-44.672 45.488-55.752 9.752-4.872 18.92-7.512 31.344-9.016 3.328-.4 18.288.128 22.184.784"
        fill={fill}
      />
    </Svg>
  );
};

export default facebookLogoOutline;

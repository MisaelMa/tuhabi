import React, { Suspense } from 'react';

import IIconProps from '../Icon/IIcon';

import FallbackSvg from './fallbackSvg';
import { getIconLoader } from './getIconLoader';

/**
 * Get dynamically icon by name to web with lazy load/suspense
 *
 * @param iconProps - all react prop for the icon component
 * @param iconProps.className - className for icon
 * @param iconProps.fill - fill color for icon
 * @param iconProps.iconName -name of icon
 * @param iconProps.size -size icon with enum
 * @param iconProps.stroke -stroke color icon
 * @param iconProps.theme -theme of icon
 * @param iconProps.themeVariant -theme for icon
 * @param iconProps.viewBox - viewBox size
 * @param iconProps.width - width size for icon
 * @param iconProps.height - height size for icon
 */
const IconContainer = ({ ...iconProps }: IIconProps): JSX.Element | null => {
  const IconSvg = getIconLoader<IIconProps>(iconProps.iconName);

  return (
    <Suspense fallback={<FallbackSvg {...iconProps} />}>
      <IconSvg {...iconProps} />
    </Suspense>
  );
};

export default IconContainer;

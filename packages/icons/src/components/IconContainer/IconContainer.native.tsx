import React from 'react';

import iconTypes from '../../icons';
import IIconProps from '../Icon/IIcon';

/**
 * Get dynamically icon by name to web with lazy load/suspense
 *
 * @param iconProps - all react prop for the icon component
 * @param iconProps.iconName - the name of icon to load
 */
const IconContainer = (iconProps: IIconProps): JSX.Element | null => {
  const { iconName } = iconProps;
  const IconSvg = iconTypes[iconName];

  if (!IconSvg) {
    return null;
  }

  return <IconSvg {...iconProps} />;
};

export default IconContainer;

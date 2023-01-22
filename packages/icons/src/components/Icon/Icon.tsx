import React from 'react';

import IconContainer from '../IconContainer/IconContainer';

import IIconProps from './IIcon';

/**
 * Icon component with support web/native
 *
 * @param iconProps - icon props
 * @param [iconProps.fill] - fill color for icon
 * @param [iconProps.className] - className for icon
 * @param iconProps.iconName - name of icon
 * @param [iconProps.size] - size icon with enum
 * @param [iconProps.stroke] -stroke color icon
 * @param [iconProps.theme] - theme of icon
 * @param [iconProps.themeVariant] - theme for icon
 * @param [iconProps.viewBox] - viewBox size
 * @param [iconProps.width] - width size for icon
 * @param [iconProps.height] - height size for icon
 */
const Icon = (iconProps: IIconProps): JSX.Element => {
  return <IconContainer {...iconProps} />;
};

export default Icon;

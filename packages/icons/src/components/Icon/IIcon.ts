import { StyleProp, ViewStyle } from 'react-native';

import { IconSizeEnum } from '@ammc/commons/constants/iconSize';

import { IconNameEnum } from '../../constants/iconNames';

/**
 * Define Icon props
 *
 * @typedef IIconProps
 */
interface IIconProps {
  className?: string;
  stroke?: string;
  fill?: string;
  height?: number;
  iconName: keyof typeof IconNameEnum;
  size?: number | IconSizeEnum;
  style?: React.CSSProperties & StyleProp<ViewStyle>;
  viewBox?: string;
  width?: number;
}

export default IIconProps;

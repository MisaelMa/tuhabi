import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { Svg as svgs } from 'svgs';

export {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Symbol,
  TSpan,
  Text,
  TextPath,
  Use,
} from 'svgs';

interface EnhancedSvgProps extends SvgProps {
  className?: string;
  style?: React.CSSProperties & StyleProp<ViewStyle>;
}

export const Svg = svgs as unknown as React.FC<EnhancedSvgProps>;

export default Svg as unknown as React.FC<EnhancedSvgProps>;

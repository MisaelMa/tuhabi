import IIconProps from '../Icon/IIcon';
import { Svg } from '../Svg/svgWithProps';

/**
 * fallback icon component
 *
 * @param props - icon props
 * @param [props.className] - fallback className
 * @param [props.height] - height size for icon
 * @param [props.style] - style for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const FallbackSvg = ({
  className,
  height,
  style,
  viewBox,
  width,
}: Pick<
  IIconProps,
  'className' | 'height' | 'style' | 'viewBox' | 'width'
>): JSX.Element => {
  return (
    <Svg
      className={className}
      height={height}
      style={style}
      viewBox={viewBox}
      width={width}
    />
  );
};

export default FallbackSvg;

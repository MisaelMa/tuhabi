import styled from 'styled-components';

import ITitleProps from './ITitle';
import { styles } from './Title.styles';

const Wrapper = styled.div`
  ${styles.wrapper}
`;

/**
 * Title Component
 *
 * @param props - component props
 * @param [props.title] - title to render
 */
const Title = ({ title }: ITitleProps): JSX.Element | null => {
  return title ? <Wrapper>{title}</Wrapper> : null;
};

export default Title;

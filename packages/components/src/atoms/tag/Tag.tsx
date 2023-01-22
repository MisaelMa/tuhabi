import styled from 'styled-components';

import ITagProps from './ITag';
import { styles } from './Tag.styles';

const Container = styled.div`
  ${styles.container}
`;
const Wrapper = styled.span`
  ${styles.wrapper}
`;

/**
 * Tag component
 *
 * @param props - component props
 * @param [props.text] - text to render
 */
const Tag = ({ text }: ITagProps): JSX.Element | null => {
  return text ? (
    <Container>
      <Wrapper>{text}</Wrapper>
    </Container>
  ) : null;
};

export default Tag;

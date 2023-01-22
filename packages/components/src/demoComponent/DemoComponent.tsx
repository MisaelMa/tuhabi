import styled from 'styled-components';

import IDemoComponentProps from './IDemoComponent';
import Styles from './DemoComponent.styles';

const Wrapper = styled.div`
  ${Styles.wrapper}
`;

/**
 * DemoComponent
 *
 * @param props - component props
 * @param [props.title] - title to render
 */
const DemoComponent = ({
  title = 'hello world',
}: IDemoComponentProps): JSX.Element => {
  return (
    <div>
      <Wrapper>{title}</Wrapper>
    </div>
  );
};

export default DemoComponent;

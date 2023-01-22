import { Meta, Story } from '@ammc/heft-storybook-web';

import ErrorBoundary from './ErrorBoundary';
import { ErrorBoundaryProps } from './IErrorBoundary';
import Styles from './ErrorBoundary.stories.styles';
/* eslint-disable jsdoc/require-jsdoc */
import styled from 'styled-components';

const WrapperPadding = styled.div`
  ${Styles.border}
`;
const WrapperHeight = styled.div`
  ${Styles.borderH}
`;

function ErrorFallback(): JSX.Element {
  return (
    <div role="alert">
      <p>Something went wrong</p>
    </div>
  );
}

function Bomb(): JSX.Element {
  throw new Error('💥 KABOOM 💥');
}

const Template: Story<ErrorBoundaryProps> = (args: ErrorBoundaryProps) => {
  return (
    <div>
      <p>
        by default ErrorBoundary returns a null value if no alternative
        component is provided.
      </p>
      <WrapperHeight>
        <ErrorBoundary>
          <Bomb />
        </ErrorBoundary>
      </WrapperHeight>
      <p>if a FallbackComponent is provided, a custom message can be made.</p>
      <WrapperPadding>
        <ErrorBoundary {...args}>
          <Bomb />
        </ErrorBoundary>
      </WrapperPadding>
    </div>
  );
};

export default {
  component: ErrorBoundary,
  title: 'components/ErrorBoundary',
} as Meta;

export const Default = Template.bind({});
Default.args = {
  fallback: ErrorFallback(),
};

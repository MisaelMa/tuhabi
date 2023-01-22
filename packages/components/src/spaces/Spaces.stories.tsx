import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';

import { Meta, Story } from '@ammc/heft-storybook-web';
import { FIGMA_SPACES_URL } from '@ammc/commons/constants/figmaUrls';
import rem from '@ammc/utilities/mixins/fonts/rem';
import { SPACES } from '@ammc/commons/constants/spaces';

import { styles } from './Spaces.stories.styles';

const Container = styled.div`
  ${styles.container}
`;
const Numbers = styled.p`
  ${styles.numbers}
`;
const SpaceBox = styled.div`
  ${styles.spaceBox}
`;
const Title = styled.p`
  ${styles.title}
`;
const Wrapper = styled.div`
  ${styles.wrapper}
`;

const spaces = Object.entries(SPACES)
  .map(space => ({
    name: space[0],
    value: space[1],
  }))
  .sort((a, b) => a.value - b.value);

const Template: Story = () => (
  <Wrapper>
    {spaces.map(({ name, value }) => (
      <Container key={name}>
        <Title>{name}</Title>
        <Numbers>
          {`${value}px / `}
          {rem(`${value}`)}
        </Numbers>
        <SpaceBox width={value} />
      </Container>
    ))}
  </Wrapper>
);

export default {
  decorators: [withDesign],
  title: 'tokens/Spaces',
} as Meta;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_SPACES_URL,
  },
};

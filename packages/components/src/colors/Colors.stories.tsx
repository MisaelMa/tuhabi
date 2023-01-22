import * as COLORS from '@ammc/commons/constants/colors';

import { Meta, Story } from '@ammc/heft-storybook-web';

import { FIGMA_COLORS_URL } from '@ammc/commons/constants/figmaUrls';
import styled from 'styled-components';
import { styles } from './Colors.stories.styles';
import { withDesign } from 'storybook-addon-designs';

const Card = styled.div`
  ${styles.card}
`;
const ColorBox = styled.div`
  ${styles.colorBox}
`;
const ColorText = styled.div`
  ${styles.colorText}
`;
const Container = styled.div`
  ${styles.container}
`;

const Template: Story = () => (
  <Container>
    {Object.entries(COLORS).map(([name, value]) => (
      <Card key={name}>
        <ColorBox backgroundColor={value} />
        <ColorText>{name}</ColorText>
        <ColorText isBold>HEX: {value}</ColorText>
      </Card>
    ))}
  </Container>
);

export default {
  decorators: [withDesign],
  title: 'tokens/Colors',
} as Meta;

export const Default = Template.bind({});

Default.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_COLORS_URL,
  },
};

/* eslint-disable jsdoc/require-jsdoc */
import { Meta, Story } from '@ammc/heft-storybook-web';

import ITitleProps from './ITitle';
import Title from './Title';

const Template: Story<ITitleProps> = (args: ITitleProps) => <Title {...args} />;

export default {
  component: Title,
  title: 'components/atoms/Title',
} as Meta;

export const Default = Template.bind({});
Default.args = {
  title: 'Titulo de widget',
};

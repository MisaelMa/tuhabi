/* eslint-disable jsdoc/require-jsdoc */
import { Meta, Story } from '@ammc/heft-storybook-web';

import DemoComponent from './DemoComponent';
import IDemoComponentProps from './IDemoComponent';

const Template: Story<IDemoComponentProps> = (args: IDemoComponentProps) => (
  <DemoComponent {...args} />
);

export default {
  component: DemoComponent,
  title: 'components/DemoComponent',
} as Meta;

export const Default = Template.bind({});
Default.args = {
  title: 'test de boton',
};

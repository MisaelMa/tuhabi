/* eslint-disable jsdoc/require-jsdoc */
import { Meta, Story } from '@ammc/heft-storybook-web';

import ITagProps from './ITag';
import Tag from './Tag';

const Template: Story<ITagProps> = (args: ITagProps) => <Tag {...args} />;

export default {
  component: Tag,
  title: 'components/atoms/Tag',
} as Meta;

export const Default = Template.bind({});
Default.args = {
  text: 'Tag',
};

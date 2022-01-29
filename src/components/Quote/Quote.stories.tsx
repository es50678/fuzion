import React from 'react';
import Quote, { Props } from './Quote';
import { Story } from '@storybook/react';

export default {
  title: 'Quote',
  component: Quote,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template: Story<Props> = (args: any) => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {
  author: 'Frank Herbert',
  quoteContent: 'There is no escape. We pay for the violence of our ancestors'
};

import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'click' },
  },
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
    primary: true,
    buttonLabel: 'why',
};

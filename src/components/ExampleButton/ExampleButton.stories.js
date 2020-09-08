import React from 'react';
import { ExampleButton } from './ExampleButton';

export default {
	title: 'ExampleButton',
	component: ExampleButton,
	argTypes: {
		bgColor: { control: 'color' },
		bgColorHover: { control: 'color' },
		font: { control: 'color' },
		fontHover: { control: 'color' },
		onClick: { action: 'click' },
	},
};

// takes color chooser args defined as argTypes
// and passes them to the component as a theme
const makeTheme = (opts) => ({
	backgroundColor: opts.bgColor,
	backgroundColorHover: opts.bgColorHover,
	fontColor: opts.font,
	fontColorHover: opts.fontHover,
});

const Template = (args) => <ExampleButton theme={makeTheme(args)} {...args} />;

export const Main = Template.bind({});
Main.args = {
	buttonLabel: 'why',
};

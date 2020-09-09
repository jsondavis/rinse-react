import React from 'react';
import { ExamplePage } from './ExamplePage';

const sampleButtonList = [
	{ buttonLabel: 'button', onClick: { action: 'button clicked' } },
	{ buttonLabel: 'button' },
	{ buttonLabel: "who's got the button" },
];

export default {
	title: 'ExamplePage',
	component: ExamplePage,
	argTypes: {
		onLogin: { action: 'clicked login' },
		onLogout: { action: 'clicked logout' },
		user: { control: 'object' },
	},
};

const Template = (args) => <ExamplePage {...args} />;

export const Main = Template.bind({});
Main.args = {
	buttonProps: sampleButtonList,
};

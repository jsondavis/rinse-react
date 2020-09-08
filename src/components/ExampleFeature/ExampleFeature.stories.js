import React from 'react';
import { ExampleFeature } from './ExampleFeature';

const sampleButtonList = [
	{ buttonLabel: 'why not' },
	{ buttonLabel: 'because' },
	{ buttonLabel: 'because it has to be done' },
];

export default {
	title: 'ExampleFeature',
	component: ExampleFeature,
};

const Template = (args) => <ExampleFeature {...args} />;

export const Main = Template.bind({});
Main.args = {
	buttonList: sampleButtonList,
};

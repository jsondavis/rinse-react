import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ExampleButton } from '../ExampleButton';

const FeatureWrapper = styled.div`
	border: 1px solid #111;
	border-radius: 3em;
	padding: 4rem 2rem;
	margin: 1rem;
`;

/**
 * ExampleFeature uses ExampleButtons to show you a box with buttons in it
 * it expects to be passed a list of buttons
 */
export const ExampleFeature = ({ buttonList, ...props }) => {
	return (
		<FeatureWrapper {...props}>
			{buttonList.map((button, index) => (
				<ExampleButton key={`button-${index}`} {...button} />
			))}
		</FeatureWrapper>
	);
};

ExampleFeature.propTypes = {
	buttonList: PropTypes.array.isRequired,
};

export default ExampleFeature;

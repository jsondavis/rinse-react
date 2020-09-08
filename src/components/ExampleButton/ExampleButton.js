import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	background-color: ${(props) => props.theme.backgroundColor};
	border: 0;
	border-radius: 3em;
	color: ${(props) => props.theme.fontColor};
	cursor: pointer;
	display: inline-block;
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 700;
	line-height: 1;
	padding: 0.5rem 1rem;

	:hover {
		background-color: ${(props) => props.theme.backgroundColorHover};
		color: ${(props) => props.theme.fontColorHover};
	}
`;

ButtonWrapper.defaultProps = {
	theme: {
		backgroundColor: '#333',
		backgroundColorHover: '#111',
		fontColor: '#fefefe',
		fontColorHover: '#fff',
	},
};

/**
 * doc blocks are parsed into md to describe the UI component
 * want a list?
 *
 * - one
 * - two
 *
 * or a code block
 *
 * ```
 * function why() {
 *     console.log('because you can?');
 * }
 *
 * ```
 *
 * | Col 1       | Col 2     |
 * | :---------- | --------: |
 * | and tables  | of course |
 *
 * just put a linebreak after any text or the extra MD features won't work
 */
export const ExampleButton = ({ buttonLabel, ...props }) => {
	return <ButtonWrapper {...props}>{buttonLabel}</ButtonWrapper>;
};

ExampleButton.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
};

export default ExampleButton;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;
`;

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
export const Button = ({ buttonLabel, ...props }) => {
	return <ButtonWrapper {...props}>{buttonLabel}</ButtonWrapper>;
};

Button.propTypes = {
	buttonLabel: PropTypes.string.isRequired,
};

export default Button;

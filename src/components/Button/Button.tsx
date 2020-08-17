import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;


export const Button: React.FC = ({ children }) => {
	return <ButtonWrapper>{children}</ButtonWrapper>
}

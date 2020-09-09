import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ExampleButton } from '../../components/ExampleButton';
import { ExampleFeature } from '../../components/ExampleFeature';

const PageWrapper = styled.button`
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.fontColor};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 600px;
	text-align: center;
	width: 100%;
	padding: 2rem 1rem;

	.user-info {
		padding-bottom: 2rem;
	}

	h1 {
		text-transform: uppercase;
	}

	section {
		padding-bottom: 1rem;
		padding-top: 1rem;
		width: 100%;

		div {
			display: inline-block;

			+ div {
				margin-left: 1rem;
			}
		}
	}
`;

PageWrapper.defaultProps = {
	theme: {
		backgroundColor: '#fefefe',
		fontColor: '#111',
	},
};

/**
 * ExamplePage should show the use of a component or a group of components
 * as well as potentially including some other content
 */
export const ExamplePage = ({ pageData, ...props }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loginButtonProps, setLoginButtonProps] = useState({
		buttonLabel: 'Login',
		onClick: props.onLogin,
	});
	const { user } = props;
	useEffect(() => {
		setLoggedIn(user && user.name);
		if (loggedIn) {
			setLoginButtonProps({
				buttonLabel: 'Logout',
				onClick: props.onLogout,
			});
		}
	}, [user]);
	return (
		<PageWrapper {...props}>
			<h1>Welcome to A Page</h1>
			<div className="user-info">
				{loggedIn
					? `welcome ${props.user.name}`
					: 'you are not logged in'}
				<ExampleButton {...loginButtonProps} />
			</div>
			<section>
				<div>
					<h2>Page Data Information Here</h2>
					<div>{pageData}</div>
					<p>
						any of these could be a component for the sake of
						theming or adding behavior
					</p>
				</div>
				<div>
					<h2>Other information Here</h2>
					{props.buttonProps ? (
						<ExampleFeature buttonList={props.buttonProps} />
					) : (
						<>no button props</>
					)}
				</div>
			</section>
		</PageWrapper>
	);
};

ExamplePage.propTypes = {
	pageData: PropTypes.string.isRequired,
	user: PropTypes.object,
	onLogin: PropTypes.func,
	onLogout: PropTypes.func,
};

export default ExamplePage;

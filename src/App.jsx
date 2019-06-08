import React from 'react';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
	text-align: center;`;

const Wrapper = styled.section`
	text-align: center;`;

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}`;

const Logo = styled.img`
	animation: ${rotate} infinite 20s linear;
	height: 40vmin;
	pointer-events: none;`;

const Header = styled.header`
	background-color: #282c34;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;`;

const Link = styled.a`
	color: #61dafb;
`;

const App = () => {
	return (
		<Wrapper>
			<Header>
				<Logo src={logo} alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Link
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Title>Learn React</Title>
				</Link>
			</Header>
		</Wrapper>
	);
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Ubuntu", "Segoe UI", "Roboto", "Oxygen", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
	monospace;
}
`;

ReactDOM.render(<>
	<GlobalStyle/>
	<App />
</>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

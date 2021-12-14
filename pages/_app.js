import { Global, css, ThemeProvider } from '@emotion/react';
import 'normalize.css';

const globalStyle = (
	<Global
		styles={css`
			body {
				background-color: #121212;
				color: #ffffff;
			}
		`}
	/>
);

const theme = {
	'01dp': '#1D1D1D',
	'02dp': '#232323',
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			{globalStyle}
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

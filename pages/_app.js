import { Global, css, ThemeProvider } from '@emotion/react';

import '@fontsource/fira-code/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import 'normalize.css';

const globalStyle = (
	<Global
		styles={css`
			body {
				background-color: #121212;
				color: #ffffff;
				&::-webkit-scrollbar {
					width: 12px;
				}
				&::-webkit-scrollbar-thumb {
					background-color: #232323;
					border-radius: 10px;
					border: 3px solid #121212;
				}
			}
		`}
	/>
);

const theme = {
	'01dp': '#1D1D1D',
	'02dp': '#232323',
	'03dp': '#242424',
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

import { Global, css, ThemeProvider } from '@emotion/react';
import { DefaultSeo } from 'next-seo';

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
			<DefaultSeo
				defaultTitle="Cendy"
				titleTemplate="Cendy • %s"
				description="Hello, my name is Cendy and I'm a self-taught developer. My interest in web development started when i decided to build and host a blog using wordpress many years ago — and here i am at the present working with JavaScript, HTML and CSS :)"
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: 'https://cendy.co',
					site_name: 'Cendy',
					description:
						"Hello, my name is Cendy and I'm a self-taught developer. My interest in web development started when i decided to build and host a blog using wordpress many years ago — and here i am at the present working with JavaScript, HTML and CSS :)",
					images: [
						{
							url: 'https://cendy.co/profile.jpg',
							width: 460,
							height: 460,
							alt: 'Cendy',
						},
					],
				}}
				twitter={{
					cardType: 'summary',
				}}
			/>
			{globalStyle}
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

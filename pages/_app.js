import NextNProgress from 'nextjs-progressbar';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextNProgress options={{ showSpinner: false }} color="rgb(125, 226, 209)" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

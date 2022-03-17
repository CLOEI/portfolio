import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class" enableColorScheme={false}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;

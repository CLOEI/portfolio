import { createContext, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { AnimatePresence } from 'framer-motion';

import '../styles/globals.css';

export const IntroContext = createContext(null);

function MyApp({ Component, pageProps, router }) {
	const [isIntro, setIsIntro] = useState(true);

	return (
		<IntroContext.Provider
			value={{
				isIntro,
				setIsIntro,
			}}
		>
			<AnimatePresence exitBeforeEnter onExitComplete={() => setIsIntro(false)}>
				<NextNProgress
					options={{ showSpinner: false }}
					color="rgb(125, 226, 209)"
				/>
				<Component {...pageProps} key={router.pathname} />
			</AnimatePresence>
		</IntroContext.Provider>
	);
}

export default MyApp;

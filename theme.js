import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const theme = extendTheme({
	config,
	colors: {
		test: 'red',
	},
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
});

export default theme;

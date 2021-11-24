import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
	colors: {
		test: 'red',
	},
	fonts: {
		heading: 'Inter',
		body: 'Inter',
	},
};

const theme = extendTheme({ config });

export default theme;

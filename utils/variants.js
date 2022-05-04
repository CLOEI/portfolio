const staggerVariant = {
	animate: (delay) => {
		return {
			transition: {
				staggerChildren: delay,
			},
		};
	},
};

export { staggerVariant };

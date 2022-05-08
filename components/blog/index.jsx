import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import Card from './Card';

function Index({ posts }) {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			animation.start('animate');
		}
	}, [inView, animation]);

	return (
		<motion.div
			variants={thisVariant}
			initial="initial"
			animate={animation}
			className="grid grid-cols-[repeat(auto-fit,_minmax(11.25rem,_1fr))] h-max gap-px mt-6"
			ref={ref}
			key="blogs"
		>
			{posts.map((post, i) => {
				return <Card key={i} data={post} />;
			})}
		</motion.div>
	);
}

const thisVariant = {
	animate: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};

export default Index;

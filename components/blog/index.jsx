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
		<div>
			<h2 className="relative font-bold text-3xl md:text-5xl opacity-[38%] pb-4">
				<span className="html-tag">&lt;h2&gt;</span>
				BLOG
				<span className="hidden sm:inline">&lt;/h2&gt;</span>
			</h2>
			<motion.div
				variants={thisVariant}
				initial="initial"
				animate={animation}
				className="grid grid-cols-2 md:grid-cols-4 gap-px"
				ref={ref}
			>
				{posts.map((post, i) => {
					return <Card key={i} data={post} />;
				})}
			</motion.div>
		</div>
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

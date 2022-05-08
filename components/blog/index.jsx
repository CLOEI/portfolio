import { motion } from 'framer-motion';

import Card from './Card';

function Index({ posts }) {
	return (
		<motion.div
			variants={thisVariant}
			initial="initial"
			animate="animate"
			exit="exit"
			className="grid grid-cols-[repeat(auto-fit,_minmax(11.25rem,_1fr))] h-max gap-px mt-6"
		>
			{posts.map((post, i) => {
				return <Card key={i} data={post} />;
			})}
		</motion.div>
	);
}

const thisVariant = {
	initial: {
		x: '100%',
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.5,
		},
	},
	exit: {
		x: '100%',
		transition: {
			type: 'tween',
		},
	},
};

export default Index;

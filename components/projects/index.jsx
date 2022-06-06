import { motion } from 'framer-motion';

import Card from './Card';

function Index({ projects }) {
	return (
		<motion.div
			variants={thisVariant}
			initial="initial"
			animate="animate"
			exit="exit"
			className="space-y-4 mt-6"
		>
			{projects.map((project, i) => {
				return <Card key={i} data={project} />;
			})}
		</motion.div>
	);
}

const thisVariant = {
	initial: {
		x: '-100%',
	},
	animate: {
		x: 0,
		transition: {
			type: 'tween',
		},
	},
	exit: {
		x: '-100%',
		transition: {
			type: 'tween',
		},
	},
};

export default Index;

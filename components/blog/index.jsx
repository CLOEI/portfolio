import { motion } from 'framer-motion';

import Card from './Card';

function Index({ posts }) {
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
				animate="animate"
				className="grid grid-cols-2 md:grid-cols-4 gap-1"
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
			staggerChildren: 0.2,
		},
	},
};

export default Index;

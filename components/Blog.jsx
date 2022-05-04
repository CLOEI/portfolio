import React from 'react';
import { motion } from 'framer-motion';

import { staggerVariant } from '../utils/variants';
import PostCard from './PostCard';

const thisVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	},
};
const borderVariant = {
	initial: {
		height: 0,
	},
	animate: {
		height: '100vh',
		transition: {
			default: {
				duration: 0.75,
			},
		},
	},
};

function Blog({ data }) {
	return (
		<motion.div
			variants={thisVariant}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex w-full min-h-[calc(100%-5rem)]"
		>
			<motion.ul
				custom={0.25}
				variants={staggerVariant}
				initial="initial"
				animate="animate"
				id="scrollable"
				className="w-full px-2 h-max max-h-[calc(100vh-5rem)] overflow-auto space-y-2"
			>
				{data.map((post, i) => (
					<PostCard key={i} data={post} />
				))}
			</motion.ul>
			<div className="relative flex items-center overflow-visible">
				<p
					className="block rotate-180 px-4 font-medium"
					style={{ writingMode: 'vertical-lr' }}
				>
					SCROLL HERE TO GO UP
				</p>
				<motion.div
					variants={borderVariant}
					initial="initial"
					animate="animate"
					className="absolute border-l border-snow bottom-0 left-0 z-50"
				></motion.div>
			</div>
		</motion.div>
	);
}

export default Blog;

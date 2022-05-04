import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectCard from './ProjectCard';

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

function Projects({ data }) {
	const [index, setIndex] = useState(0);

	const next = () => index !== data.length - 1 && setIndex(index + 1);
	const pre = () => index > 0 && setIndex(index - 1);

	return (
		<motion.div
			variants={thisVariant}
			initial="initial"
			animate="animate"
			exit="exit"
			className="flex h-[calc(100%-5rem)] justify-between items-center"
		>
			<button className={`p-2 ${index === 0 && 'opacity-[38%]'}`} onClick={pre}>
				<MdKeyboardArrowLeft size={32} />
			</button>
			<ProjectCard data={data[index]} key={index} />
			<button
				className={`p-2 ${index === data.length - 1 && 'opacity-[38%]'}`}
				onClick={next}
			>
				<MdKeyboardArrowRight size={32} />
			</button>
			<div className="absolute bottom-1 left-0 right-0">
				<p className="font-mono font-bold text-center">{`${index + 1}/${
					data.length
				}`}</p>
			</div>
		</motion.div>
	);
}

export default Projects;

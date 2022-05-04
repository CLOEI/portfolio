import Image from 'next/image';

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

import { staggerVariant } from '../utils/variants';

const cardVariants = {
	initial: {
		x: '-150%',
	},
	animate: {
		x: 0,
	},
};
const buttonVariant = {
	initial: {
		y: '-150%',
	},
	animate: {
		y: 0,
		transition: {
			x: { type: 'spring', stiffness: 100 },
			default: {
				duration: 0.3,
			},
		},
	},
};
const imgContainerVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 0.75,
	},
};

function ProjectCard({ data }) {
	const { fields } = data;
	const title = fields.title;
	const description = fields.description;
	const tags = fields.tags;
	const image = fields.image.fields.file.url;
	const repoLink = fields.repositoryLink;
	const liveLink = fields.liveViewLink;

	return (
		<div className="flex flex-col md:flex-row md:px-8">
			<motion.div
				variants={imgContainerVariant}
				initial="initial"
				animate="animate"
				exit="exit"
				className="relative w-full md:w-60 h-80 flex-shrink-0"
			>
				<Image src={'https:' + image} alt={title} layout="fill" objectFit="cover" />
			</motion.div>
			<div className="md:overflow-hidden">
				<motion.div
					variants={cardVariants}
					initial="initial"
					animate="animate"
					exit="exit"
					className="relative bg-snow h-max text-eerie-black mx-2 rounded-lg px-5 pt-4 -mt-[50%] md:mt-0"
				>
					<h2 className="text-3xl font-bold">{title}</h2>
					<p>{description}</p>
					<p className="py-4 space-y-1">
						{tags.map((tag, index) => (
							<span
								key={index}
								className="inline-block bg-blue-green text-black px-2 rounded-full mr-2 font-mono"
							>
								{tag}
							</span>
						))}
					</p>
					<motion.div
						custom={0.2}
						variants={staggerVariant}
						className="flex absolute left-0 -bottom-12 space-x-1 overflow-hidden"
					>
						<motion.button variants={buttonVariant} className="icon-button">
							<a href={repoLink} target="_blank" rel="noreferrer">
								<FiGithub />
							</a>
						</motion.button>
						<motion.button variants={buttonVariant} className="icon-button">
							<a href={liveLink} target="_blank" rel="noreferrer">
								<FiExternalLink />
							</a>
						</motion.button>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}

export default ProjectCard;

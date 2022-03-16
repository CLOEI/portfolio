import Image from 'next/image';

import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const cardVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
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
		<motion.li
			className="relative mb-5 overflow-hidden bg-dark-01dp"
			variants={cardVariants}
		>
			<div className="relative pt-6 px-6 pb-5 z-10">
				<a
					href={liveLink}
					target="_blank"
					rel="noreferrer"
					className="before:absolute before:top-0 before:left-0 before:w-full before:h-full"
				>
					<h3 className="text-white text-high font-bold">{title}</h3>
				</a>
				<p className="text-white text-medium my-1">{description}</p>
				<ul className="flex flex-wrap my-6 w-max">
					{tags.map((tag, i) => {
						return (
							<li key={i} className="mr-3 mb-2 text-white text-medium text-xs">
								{tag}
							</li>
						);
					})}
				</ul>
				<div className="flex items-center -ml-2 z-10 w-max text-high text-white">
					<a
						className="p-3 hover:bg-dark-onhover hover:rounded-full"
						href={repoLink}
						target="_blank"
						rel="noreferrer"
					>
						<FiGithub />
					</a>
					<a
						className="p-3 hover:bg-dark-onhover hover:rounded-full"
						href={liveLink}
						target="_blank"
						rel="noreferrer"
					>
						<FiExternalLink />
					</a>
				</div>
			</div>
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="relative w-full h-full mix-blend-multiply">
					<Image
						src={`https:${image}`}
						alt={title}
						objectFit="cover"
						layout="fill"
					/>
				</div>
			</div>
		</motion.li>
	);
}

export default ProjectCard;

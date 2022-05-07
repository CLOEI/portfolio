import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import Image from 'next/image';

function Card({ data }) {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	const { fields } = data;
	const title = fields.title;
	const description = fields.description;
	const tags = fields.tags;
	const image = fields.image.fields.file.url;
	const repoLink = fields.repositoryLink;
	const liveLink = fields.liveViewLink;

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
			className="grid grid-cols-12 grid-rows-6 w-full md:w-full odd:from-left even:from-right"
			ref={ref}
		>
			<div className="img-container relative col-[1/-1] row-[1/-1] md:rounded-lg overflow-hidden mix-blend-overlay md:mix-blend-normal md:opacity-40 hover:opacity-90">
				<Image
					src={'https:' + image}
					alt={title}
					layout="fill"
					objectFit="cover"
					priority
				/>
			</div>
			<div className="txt-container relative col-[1/-1] row-[1/-1] md:bg-snow md:rounded-lg md:text-eerie-black px-6 py-8">
				<div className="space-y-2">
					<h3 className="font-bold text-xl">{title}</h3>
					<p>{description}</p>
					<div className="-ml-2 md:ml-0">
						{tags.map((tag, i) => {
							return (
								<span
									key={i}
									className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium leading-5 md:bg-gray-100 md:text-gray-800"
								>
									{tag}
								</span>
							);
						})}
					</div>
				</div>
				<div className="mt-4">
					<button className="p-2 -ml-2 hover:opacity-75 text-blue-green md:text-persian-green rounded-lg">
						<a href={repoLink} target="_blank" rel="noopener noreferrer">
							<FiGithub size={18} />
						</a>
					</button>
					<button className="p-2 hover:opacity-75 text-blue-green md:text-persian-green rounded-lg">
						<a href={liveLink} target="_blank" rel="noopener noreferrer">
							<FiExternalLink size={18} />
						</a>
					</button>
				</div>
			</div>
		</motion.div>
	);
}

const thisVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export default Card;

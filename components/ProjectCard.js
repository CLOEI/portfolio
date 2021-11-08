import Image from 'next/image';
import style from '../styles/components/projectcard.module.scss';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';

function ProjectCard({ imageURL, title, desc, alt }) {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.4 });
	const cardVariant = {
		hidden: { opacity: 0, y: 100 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				ease: 'easeOut',
				durations: 2,
			},
		},
	};

	useEffect(() => {
		if (inView) {
			controls.start('show');
		}
	}, [controls, inView]);

	return (
		<motion.div
			className={style.container}
			variants={cardVariant}
			initial="hidden"
			animate={controls}
			ref={ref}
		>
			<div className={style.image}>
				<Image
					src={imageURL}
					layout="fill"
					objectFit="cover"
					alt={alt}
					objectPosition="0 50%"
				/>
			</div>
			<div className={style.info}>
				<p>{title}</p>
				<p>{desc}</p>
			</div>
		</motion.div>
	);
}

export default ProjectCard;

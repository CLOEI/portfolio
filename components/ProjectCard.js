import Image from 'next/image';
import style from '../styles/components/projectcard.module.scss';

function ProjectCard({ imageURL, title, desc, alt }) {
	return (
		<div className={style.container}>
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
		</div>
	);
}

export default ProjectCard;

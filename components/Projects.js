import React from 'react';
import style from '../styles/components/projects.module.scss';
import ProjectCard from './ProjectCard';

export default function Projects({ items }) {
	return (
		<section id="projects" className={style.container}>
			<div className={style.back}>Projects</div>
			<div className={style.projects}>
				{items.map((val, i) => {
					const title = val.fields.title;
					const desc = val.fields.description;
					const imageURL = 'https:' + val.fields.image.fields.file.url;

					return (
						<ProjectCard
							title={title}
							desc={desc}
							imageURL={imageURL}
							alt={title}
							key={i}
						/>
					);
				})}
			</div>
		</section>
	);
}

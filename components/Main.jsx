import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import PostCard from './PostCard';
import ProjectCard from './ProjectCard';

function Main({ projects, posts }) {
	const [projectMore, setProjectMore] = useState(false);

	return (
		<div className="py-10 px-2 md:px-16 lg:px-28 space-y-10">
			<div className="relative flex flex-col items-center space-y-4 md:px-0">
				<h2 className="relative font-bold text-3xl md:text-5xl opacity-[38%] self-start">
					<span className="html-tag">&lt;h2&gt;</span>
					PROJECTS
					<span className="hidden sm:inline">&lt;/h2&gt;</span>
				</h2>
				{projects.slice(0, projectMore ? undefined : 3).map((project, i) => {
					return <ProjectCard key={i} data={project} />;
				})}
				<button
					className="bg-persian-green px-4 py-2 rounded-sm"
					onClick={() => setProjectMore(!projectMore)}
				>
					{projectMore ? 'Show less' : 'Show more'}
				</button>
			</div>
			<div>
				<h2 className="relative font-bold text-3xl md:text-5xl opacity-[38%] pb-4">
					<span className="html-tag">&lt;h2&gt;</span>
					BLOG
					<span className="hidden sm:inline">&lt;/h2&gt;</span>
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-1">
					{posts.map((post, i) => {
						return <PostCard key={i} data={post} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default Main;

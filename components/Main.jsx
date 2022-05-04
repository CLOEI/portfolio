import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Projects from './Projects';
import Blog from './Blog';

function Main({ projects, posts }) {
	const [tab, setTab] = useState('projects');

	const setProjects = () => setTab('projects');
	const setBlog = () => setTab('blog');

	return (
		<div className="h-full">
			<div className="flex justify-center items-center w-full h-20">
				<motion.button onClick={setProjects} className="tab-button" layout>
					PROJECTS
					{tab === 'projects' && (
						<motion.div layoutId="underline" className="tab-underline" />
					)}
				</motion.button>
				<motion.button onClick={setBlog} className="tab-button" layout>
					BLOG
					{tab === 'blog' && (
						<motion.div layoutId="underline" className="tab-underline" />
					)}
				</motion.button>
			</div>
			<AnimatePresence initial={false} exitBeforeEnter>
				{tab === 'projects' ? (
					<Projects data={projects} key={tab} />
				) : (
					<Blog data={posts} key={tab} />
				)}
			</AnimatePresence>
		</div>
	);
}

export default Main;

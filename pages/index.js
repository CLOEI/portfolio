import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import Head from 'next/head';

import Projects from '../components/projects';
import Profile from '../components/Profile';
import Blog from '../components/blog';

function Home({ projects, posts }) {
	const [currentTab, setCurrentTab] = useState('projects');

	const setToProjects = () => setCurrentTab('projects');
	const setToBlog = () => setCurrentTab('blog');

	return (
		<div className="grid lg:grid-cols-[30rem_1fr] lg:h-screen gap-x-10 overflow-hidden">
			<Head>
				<title>Cendy</title>
			</Head>
			<Profile />
			<div className="py-10 px-2 lg:overflow-y-scroll lg:overflow-x-hidden">
				<motion.div className="w-max mx-auto" layout>
					<button className="tab-button" onClick={setToProjects}>
						PROJECTS
						{currentTab === 'projects' && (
							<motion.div layoutId="underline" className="tab-underline"></motion.div>
						)}
					</button>
					<button className="tab-button" onClick={setToBlog}>
						BLOG
						{currentTab === 'blog' && (
							<motion.div layoutId="underline" className="tab-underline"></motion.div>
						)}
					</button>
				</motion.div>
				<motion.div
					className="h-full"
					drag="x"
					dragConstraints={{
						left: 0,
						right: 0,
					}}
					onDrag={(_, info) => {
						if (info.offset.x < -100 && info.velocity.x < -500) {
							setToBlog();
						} else if (info.offset.x > 100 && info.velocity.x > 500) {
							setToProjects();
						}
					}}
				>
					<AnimatePresence exitBeforeEnter initial={false}>
						{currentTab === 'projects' ? (
							<Projects projects={projects} key="projects" />
						) : (
							<Blog posts={posts} key="blog" />
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
}

export default Home;

export async function getStaticProps() {
	const client = require('../contentful');

	const projects = await client.getEntries({
		content_type: 'projects',
	});
	const posts = await client.getEntries({
		content_type: 'post',
	});

	return {
		props: {
			projects: projects.items,
			posts: posts.items,
		},
	};
}

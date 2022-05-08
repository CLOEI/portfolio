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
		<div className="grid md:grid-cols-[30rem_1fr] md:h-screen gap-x-10 overflow-hidden">
			<Head>
				<title>Cendy</title>
			</Head>
			<Profile />
			<div className="py-10 px-2 md:overflow-y-scroll">
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
				<AnimatePresence>
					{currentTab === 'projects' ? (
						<Projects projects={projects} />
					) : (
						<Blog posts={posts} />
					)}
				</AnimatePresence>
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

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { FiGithub, FiInstagram, FiMoon, FiSun } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

import ProjectCard from '../components/ProjectCard';
import PostCard from '../components/PostCard';

import profile from '../public/profile.jpeg';

const projectVariant = {
	initial: {
		x: '-100%',
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.5,
			type: 'tween',
		},
	},
	exit: {
		x: '-100%',
		transition: {
			type: 'tween',
		},
	},
};
const blogVariant = {
	initial: {
		x: '100%',
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.3,
			type: 'tween',
		},
	},
	exit: {
		x: '100%',
		transition: {
			type: 'tween',
		},
	},
};

export default function Home({ projects, posts }) {
	const { theme, setTheme } = useTheme();
	const [currIsProject, setCurrIsProject] = useState(true);
	const [height, setHeight] = useState(0);
	const mainRef = useRef(null);

	useEffect(() => {
		setHeight(mainRef.current.offsetHeight);
	}, []);

	return (
		<div className="grid grid-rows-1 gap-5 mt-2 mx-4 md:grid-cols-2">
			<Head>
				<title>Cendy</title>
			</Head>
			<div className="flex flex-col items-center md:items-start md:sticky md:top-5 md:self-start">
				<h1 className="text-high font-bold text-3xl my-4">Cendy</h1>
				<div className="flex w-full flex-col items-center md:flex-row md:items-end">
					<div className="overflow-hidden rounded-full mb-3 w-full max-w-[12rem]">
						<Image src={profile} placeholder="blur" alt="Cendy" layout="responsive" />
					</div>
					<ul className="grid w-max grid-cols-3 gap-1 my-4">
						<li className="bg-dark-01dp rounded-full cursor-pointer select-none hover:bg-dark-onhover">
							<a
								className="grid items-center justify-center text-white w-9 h-9"
								href="https://github.com/CLOEI"
								target="_blank"
								rel="noreferrer"
							>
								<FiGithub />
							</a>
						</li>
						<li className="bg-dark-01dp rounded-full cursor-pointer select-none hover:bg-dark-onhover">
							<a
								className="grid items-center justify-center text-white w-9 h-9"
								href="https://www.instagram.com/cendy_ig/"
								target="_blank"
								rel="noreferrer"
							>
								<FiInstagram />
							</a>
						</li>
						<li className="bg-dark-01dp rounded-full cursor-pointer select-none hover:bg-dark-onhover">
							<button
								className="grid items-center justify-center text-white w-9 h-9"
								onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
							>
								{theme === 'dark' ? <FiSun /> : <FiMoon />}
							</button>
						</li>
					</ul>
				</div>
				<p className="text-high text-justify leading-6 w-[90%] md:w-[65%] my-2">
					Hello, my name is Cendy and I&apos;m a self-taught developer. My interest
					in web development started when i decided to build and host a blog using
					wordpress many years ago — and here i am at the present working with{' '}
					<span className="text-medium">JavaScript</span>,{' '}
					<span className="text-medium">HTML</span> and{' '}
					<span className="text-medium">CSS</span> :)
				</p>
				<button className="bg-dark-01dp p-3 my-4">
					<a href="mailto:cendyemail@gmail.com">
						<p className="text-white text-high">Contact me</p>
					</a>
				</button>
			</div>
			<main>
				<nav>
					<motion.ul className="flex relative items-center my-4 after:w-full after:h-[1px] after:bg-dark-02dp">
						<li
							className="relative p-4 cursor-pointer select-none"
							onClick={() => setCurrIsProject(true)}
						>
							<h2 className="text-high text-xl font-bold">Projects</h2>
							{currIsProject && (
								<motion.div
									className="absolute w-full h-1 left-0 bottom-[-1px] bg-dark-02dp"
									layoutId="underline"
								/>
							)}
						</li>
						<li
							className="relative p-4 cursor-pointer select-none"
							onClick={() => setCurrIsProject(false)}
						>
							<h2 className="text-high text-xl font-bold">Blog</h2>
							{!currIsProject && (
								<motion.div
									className="absolute w-full h-1 left-0 bottom-[-1px] bg-dark-02dp"
									layoutId="underline"
								/>
							)}
						</li>
					</motion.ul>
					<div className="overflow-x-hidden">
						<AnimatePresence exitBeforeEnter initial={false}>
							{currIsProject ? (
								<motion.ul
									key="project"
									initial="initial"
									animate="animate"
									exit="exit"
									variants={projectVariant}
									drag="x"
									dragConstraints={{ right: 0, left: 0 }}
									onDragEnd={(_, info) => {
										if (info.offset.x < -100 && info.velocity.x < -500) {
											setCurrIsProject(false);
										}
									}}
									ref={mainRef}
								>
									{projects.map((entry, i) => {
										return <ProjectCard data={entry} key={i} />;
									})}
								</motion.ul>
							) : (
								<motion.ul
									key="blog"
									initial="initial"
									animate="animate"
									exit="exit"
									variants={blogVariant}
									style={{ minHeight: height }}
									drag="x"
									dragConstraints={{ right: 0, left: 0 }}
									onDragEnd={(_, info) => {
										if (info.offset.x > 100 && info.velocity.x > 500) {
											setCurrIsProject(true);
										}
									}}
								>
									{posts.map((entry, i) => {
										return <PostCard key={i} data={entry} />;
									})}
								</motion.ul>
							)}
						</AnimatePresence>
					</div>
				</nav>
			</main>
		</div>
	);
}

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

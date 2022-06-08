import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import Head from 'next/head';

import Profile from './Profile';

function Layout({ children }) {
	const router = useRouter();
	const pathname = router.pathname;

	const setToProjects = () => router.push('/', undefined, { scroll: false });
	const setToBlog = () => router.push('/blog', undefined, { scroll: false });

	return (
		<div className="grid lg:grid-cols-[30rem_1fr] lg:h-screen gap-x-28 overflow-hidden">
			<Head>
				<title>Cendy</title>
			</Head>
			<Profile />
			<div className="py-10 px-2 lg:overflow-y-scroll lg:overflow-x-hidden">
				<motion.div className="w-max mx-auto" layout>
					<button className="tab-button" onClick={setToProjects}>
						PROJECTS
						{pathname === '/' && (
							<motion.div layoutId="underline" className="tab-underline"></motion.div>
						)}
					</button>
					<button className="tab-button" onClick={setToBlog}>
						BLOG
						{pathname === '/blog' && (
							<motion.div layoutId="underline" className="tab-underline"></motion.div>
						)}
					</button>
				</motion.div>
				<motion.div
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
					{children}
				</motion.div>
			</div>
		</div>
	);
}

export default Layout;

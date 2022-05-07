import Head from 'next/head';

import Projects from '../components/projects';
import Profile from '../components/Profile';
import Blog from '../components/blog';

function Home({ projects, posts }) {
	return (
		<div>
			<Head>
				<title>Cendy</title>
			</Head>
			<Profile />
			<div className="py-10 px-2 md:px-16 lg:px-28">
				<Projects projects={projects} />
				<Blog posts={posts} />
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

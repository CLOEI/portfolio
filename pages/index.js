import Head from 'next/head';

import Profile from '../components/Profile';
import Main from '../components/Main';

function Home({ projects, posts }) {
	return (
		<div>
			<Head>
				<title>Cendy</title>
			</Head>
			<Profile />
			<Main projects={projects} posts={posts} />
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

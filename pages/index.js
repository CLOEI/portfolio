import ReactFullpage from '@fullpage/react-fullpage';

import Head from 'next/head';

import Profile from '../components/Profile';
import Main from '../components/Main';

function Home({ projects, posts }) {
	return (
		<ReactFullpage
			normalScrollElements="#scrollable"
			render={({ state, fullPageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						<Head>
							<title>Cendy</title>
						</Head>
						<div className="section">
							<Profile />
						</div>
						<div className="section">
							<Main projects={projects} posts={posts} />
						</div>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
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

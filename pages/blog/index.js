import React from 'react';

import Layout from '../../components/Layout';
import Blog from '../../components/blog';

function Index({ posts }) {
	return (
		<Layout>
			<Blog posts={posts} key="blog" />
		</Layout>
	);
}

export default Index;

export async function getStaticProps() {
	const client = require('../../contentful');
	const posts = await client.getEntries({
		content_type: 'post',
	});

	return {
		props: {
			posts: posts.items,
		},
		revalidate: 10,
	};
}

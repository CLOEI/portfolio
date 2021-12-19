import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';

import Head from 'next/head';

function Blog({ post }) {
	const router = useRouter();
	console.log(post);
	return (
		<>
			<Head>
				<title>Cendy • {post[0].fields.title}</title>
			</Head>
			<div onClick={() => router.back()}>Temp button</div>
			{documentToReactComponents(post[0].fields.body)}
		</>
	);
}

export async function getStaticPaths() {
	const client = require('../../contentful');
	const posts = await client.getEntries({
		content_type: 'post',
	});

	const slugs = posts.items.map((post) => {
		return { params: { slug: post.fields.slug } };
	});

	return {
		paths: slugs,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const client = require('../../contentful');
	const post = await client.getEntries({
		content_type: 'post',
		'fields.slug': params.slug,
	});
	return {
		props: {
			post: post.items,
		},
	};
}

export default Blog;

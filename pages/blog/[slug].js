import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { FiArrowLeft } from 'react-icons/fi';

const renderOptions = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			return (
				<div className="w-max mx-auto my-4">
					<Image
						src={`https://${node.data.target.fields.file.url}`}
						height={node.data.target.fields.file.details.image.height}
						width={node.data.target.fields.file.details.image.width}
						alt={node.data.target.fields.description}
					/>
				</div>
			);
		},
		[BLOCKS.PARAGRAPH]: (node, children) => (
			<p className="text-high leading-6 my-2">{children}</p>
		),
		[BLOCKS.HEADING_2]: (node, children) => (
			<h2 className="text-high font-bold text-3xl my-2">{children}</h2>
		),
		[INLINES.HYPERLINK]: (node, children) => (
			<a
				href={node.data.uri}
				target="_blank"
				rel="noreferrer"
				className="text-medium underline"
			>
				{children}
			</a>
		),
	},
};

function Blog({ post }) {
	return (
		<div className="m-3">
			<Head>
				<title>{post[0].fields.title}</title>
			</Head>
			<nav>
				<Link href="/">
					<a className="block text-high w-max bg-dark-02dp text-white rounded-full hover:bg-dark-onhover">
						<FiArrowLeft size={42} />
					</a>
				</Link>
			</nav>
			<h1 className="text-high text-4xl font-bold my-3">{post[0].fields.title}</h1>
			{documentToReactComponents(post[0].fields.body, renderOptions)}
		</div>
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

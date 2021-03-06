import { motion } from 'framer-motion';
import TimeAgo from 'react-timeago';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { FiArrowLeft } from 'react-icons/fi';

function Blog({ post }) {
	const {
		fields: { title },
		sys: { createdAt },
	} = post[0];

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="m-3"
		>
			<Head>
				<title>{post[0].fields.title}</title>
			</Head>
			<nav>
				<Link href="/blog">
					<a className="block w-max text-white rounded-full">
						<FiArrowLeft size={42} />
					</a>
				</Link>
			</nav>
			<h1 className="text-4xl font-bold my-3">{title}</h1>
			<TimeAgo date={createdAt} className="opacity-[87%]" />
			{documentToReactComponents(post[0].fields.body, renderOptions)}
		</motion.div>
	);
}

const renderOptions = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: (node) => {
			return (
				<div className="relative flex justify-center w-full my-4">
					<Image
						src={`https:${node.data.target.fields.file.url}`}
						height={node.data.target.fields.file.details.image.height}
						width={node.data.target.fields.file.details.image.width}
						alt={node.data.target.fields.description}
					/>
				</div>
			);
		},
		[BLOCKS.PARAGRAPH]: (_, children) => (
			<p className="leading-6 my-2">{children}</p>
		),
		[BLOCKS.HEADING_2]: (_, children) => (
			<h2 className="font-bold text-3xl my-2">{children}</h2>
		),
		[BLOCKS.HEADING_3]: (_, children) => (
			<h3 className="font-bold text-2xl my-2">{children}</h3>
		),
		[INLINES.HYPERLINK]: (node, children) => (
			<a
				href={node.data.uri}
				target="_blank"
				rel="noreferrer"
				className="underline opacity-[87%]"
			>
				{children}
			</a>
		),
	},
};

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
		fallback: 'blocking',
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

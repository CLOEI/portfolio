import React from 'react';
import styled from '@emotion/styled';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { FiArrowLeft } from 'react-icons/fi';
import { css } from '@emotion/react';
import { NextSeo } from 'next-seo';

import Image from 'next/image';
import { useRouter } from 'next/router';

const options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <Text weight="400">{children}</Text>,
		[BLOCKS.HEADING_2]: (node, children) => <Heading as="h2">{children}</Heading>,
		[INLINES.HYPERLINK]: (node, children) => (
			<Text
				as="a"
				weight="400"
				href={node.data.uri}
				target="_blank"
				rel="noreferrer"
				css={css`
					color: inherit;
					opacity: 60%;
				`}
			>
				{children}
			</Text>
		),
	},
};

function Blog({ post, SEODesc }) {
	const body = post[0].fields.body;
	const title = post[0].fields.title;
	const hero = post[0].fields.thumbnail?.fields?.file?.url || null;

	const router = useRouter();

	return (
		<Wrapper>
			<NextSeo
				title={title}
				description={SEODesc}
				openGraph={{
					type: 'article',
					locale: 'id_ID',
					title: title,
					description: SEODesc,
				}}
			/>
			<BackButton onClick={() => router.back()} />
			{hero && (
				<ImageWrapper>
					<Image src={`https:${hero}`} layout="fill" alt={title} objectFit="cover" />
				</ImageWrapper>
			)}
			<Heading
				as="h1"
				css={css`
					line-height: 32px;
				`}
			>
				{title}
			</Heading>
			{documentToReactComponents(body, options)}
		</Wrapper>
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
	const SEODesc = post.items[0].fields.body.content
		.filter((item) => item.nodeType === 'paragraph')
		.slice(0, 1)
		.map((item) => item.content)[0]
		.filter((item) => item.nodeType === 'text')
		.map((item) => item.value)
		.join('')
		.slice(0, 160);

	return {
		props: {
			post: post.items,
			SEODesc,
		},
	};
}

const Text = styled.p`
	font-family: 'Inter', sans-serif;
	font-weight: ${(props) => props.weight || 800};
	opacity: 87%;
	line-height: 24px;
`;
const Heading = styled(Text)`
	line-height: 28px;
`;
const BackButton = styled(FiArrowLeft)`
	width: 40px;
	height: 40px;
	cursor: pointer;
`;
const Wrapper = styled.div`
	margin: 10px;
	@media (min-width: 768px) {
		margin: 20px 20px 0 20px;
	}
`;
const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-top: 42%;
	margin-top: 10px;
	background-color: ${(props) => props.theme['01dp']};
`;

export default Blog;

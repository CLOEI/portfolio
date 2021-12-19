import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import Link from 'next/link';

const cardVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

function PostCard({ data }) {
	const date = data.sys.createdAt;
	const title = data.fields.title;
	const slug = data.fields.slug;

	return (
		<Wrapper variants={cardVariant}>
			<Link href={`/blog/${slug}`}>
				<a>
					<Heading>{title}</Heading>
					<DateText>
						{new Date(date).toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
					</DateText>
				</a>
			</Link>
		</Wrapper>
	);
}

const Wrapper = styled(motion.li)`
	position: relative;
	text-align: right;
	cursor: pointer;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 3px;
		height: 100%;
		background-color: #fff;
		opacity: 87%;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
`;
const Heading = styled.h3`
	font-family: 'Inter', sans-serif;
	font-weight: ${(props) => props.weight || 800};
	opacity: 87%;
	cursor: initial;
`;
const DateText = styled.p`
	font-family: 'Fira Code', monospace;
	font-weight: 300;
	font-size: 0.8rem;
	padding: 0;
	opacity: 60%;
	cursor: initial;
`;

export default PostCard;

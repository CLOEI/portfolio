import React from 'react';
import styled from '@emotion/styled';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import Image from 'next/image';

const cardVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

function ProjectCard({ data }) {
	const title = data.fields.title;
	const description = data.fields.description;
	const tags = data.fields.tags;
	const image = data.fields.image.fields.file.url;
	const repoLink = data.fields.repositoryLink;
	const liveLink = data.fields.liveViewLink;

	return (
		<Wrapper variants={cardVariant}>
			<ContentWrapper>
				<a
					href={liveLink}
					target="_blank"
					rel="noreferrer"
					css={css`
						text-decoration: none;
						color: inherit;
						&::before {
							content: '';
							position: absolute;
							top: 0;
							right: 0;
							left: 0;
							bottom: 0;
							z-index: -1;
						}
					`}
				>
					<Text as="h3">{title}</Text>
				</a>
				<Text weight="400" as="p">
					{description}
				</Text>
				<TechList>
					{tags.map((tag, i) => {
						return <Tag key={i}>{tag}</Tag>;
					})}
				</TechList>
				<ExternalContainer>
					<Link href={repoLink} target="_blank" rel="noreferrer">
						<FiGithub />
					</Link>
					<Link href={liveLink} target="_blank" rel="noreferrer">
						<FiExternalLink />
					</Link>
				</ExternalContainer>
			</ContentWrapper>
			<ImageWrapper>
				<Image
					src={`https:${image}`}
					alt={title}
					objectFit="cover"
					layout="fill"
					priority
				/>
			</ImageWrapper>
		</Wrapper>
	);
}

const Text = styled.h1`
	font-family: 'Inter', sans-serif;
	font-weight: ${(props) => props.weight || 800};
	opacity: 87%;
	line-height: 24px;
`;
const Tag = styled.li`
	font-family: 'Fira Code', monospace;
	font-weight: 300;
	font-size: 0.8rem;
	padding: 0;
	margin: 0px 10px 5px 0px;
	opacity: 60%;
`;
const Wrapper = styled(motion.li)`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	margin-bottom: 30px;
	border-radius: 4px;
	background-color: ${(props) => props.theme['01dp']};
`;
const ContentWrapper = styled.div`
	position: relative;
	padding: 25px 25px 20px;
	grid-area: 1/1/1/-1;
	z-index: 2;
`;
const ImageWrapper = styled.div`
	position: relative;
	z-index: 1;
	grid-area: 1/1/1/-1;
	user-select: none;
	mix-blend-mode: multiply;
	span {
		opacity: 0.65 !important;
	}
	&::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background-color: ${(props) => props.theme['02dp']};
	}
`;
const TechList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	margin: 30px 0;
	padding: 0;
	width: max-content;
`;
const ExternalContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: -10px;
	z-index: 3;
	width: max-content;
`;
const Link = styled.a`
	text-decoration: none;
	color: inherit;
	padding: 10px;
	svg {
		width: 20px;
		height: 20px;
	}
	&:hover {
		opacity: 60%;
	}
`;

export default ProjectCard;

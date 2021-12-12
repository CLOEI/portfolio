import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import Image from 'next/image';

function ProjectCard({ data }) {
	const title = data.fields.title;
	const description = data.fields.description;
	const tags = data.fields.tags;
	const image = data.fields.image.fields.file.url;

	return (
		<Wrapper>
			<ImageWrapper>
				<Image src={`https:${image}`} layout="fill" objectFit="cover" alt={title} />
			</ImageWrapper>
			<InfoWrapper>
				<Heading as="h3">Calculator</Heading>
				<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
				<Box>
					{tags.map((tag, i) => {
						return <Tag key={i}>{tag}</Tag>;
					})}
				</Box>
				<Box>
					<Link href="#" push>
						<FiGithub />
					</Link>
					<Link href="#">
						<FiExternalLink />
					</Link>
				</Box>
			</InfoWrapper>
		</Wrapper>
	);
}

const Heading = styled.h1`
	font-family: 'Inter', sans-serif;
	font-weight: ${(props) => props.weight || 800}; ;
`;
const Text = styled.p`
	font-family: 'Inter', sans-serif;
	font-weight: 400;
	background-color: #2d3748;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	width: 100%;
	padding: 15px;
	margin: 0;
`;
const Tag = styled.p`
	font-family: 'Fira Code', monospace;
	font-weight: 300;
	font-size: 0.8rem;
	padding: 0 4px;
`;
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	margin-bottom: 10px;
`;
const ImageWrapper = styled.div`
	position: relative;
	grid-area: 1/1/1/-1;
	z-index: -1;
	@media (min-width: 768px) {
		grid-area: 1/6/1/1;
	}
`;
const InfoWrapper = styled.div`
	grid-area: 1/1/1/-1;
	@media (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		grid-area: 1/5/1/-1;
	}
`;
const Box = styled.div`
	display: flex;
`;
const Link = styled.a`
	margin-right: ${(props) => (props.push ? '10px' : 0)};
	color: inherit;
`;

export default ProjectCard;

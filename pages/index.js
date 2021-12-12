import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiInstagram } from 'react-icons/fi';

import Head from 'next/head';
import Image from 'next/image';

import profile from '../public/profile.jpg';
import ProjectCard from '../components/ProjectCard';

function Home({ entries }) {
	console.log(entries);
	return (
		<Wrapper>
			<Head>
				<title>Cendy/&gt;</title>
			</Head>
			<ProfileWrapper>
				<Heading>Cendy</Heading>
				<ProfileContainer>
					<Profile>
						<Image src={profile} placeholder="blur" alt="Cendy" layout="responsive" />
					</Profile>
					<SocialContainer>
						<SocialItem>
							<FiGithub />
						</SocialItem>
						<SocialItem>
							<FiInstagram />
						</SocialItem>
					</SocialContainer>
				</ProfileContainer>
				<Text>I&apos;m a MERN stack developer</Text>
				<ContactButton>Contact me</ContactButton>
			</ProfileWrapper>
			<MainWrapper>
				<Navigation>
					<NavigationItem>
						<Heading weight={700} as="h2">
							Projects
						</Heading>
					</NavigationItem>
					<NavigationItem>
						<Heading weight={700} as="h2">
							Blog
						</Heading>
					</NavigationItem>
				</Navigation>
				<div>
					{entries.map((entry, i) => {
						return <ProjectCard data={entry} key={i} />;
					})}
				</div>
			</MainWrapper>
		</Wrapper>
	);
}

export async function getStaticProps() {
	const client = require('../contentful');

	const entries = await client.getEntries({
		content_type: 'projects',
	});

	return {
		props: {
			entries: entries.items,
		},
	};
}

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-gap: 20px;
	margin: 3px 3px 0 3px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 50px;
		margin: 20px 20px 0 20px;
	}
`;
const Heading = styled.h1`
	font-family: 'Inter', sans-serif;
	font-weight: ${(props) => props.weight || 800}; ;
`;
const Text = styled.p`
	font-family: 'Inter', sans-serif;
	font-weight: 400;
`;
const ProfileWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		align-items: flex-start;
	}
`;
const ProfileContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-end;
	}
`;
const Profile = styled.div`
	width: 100%;
	border-radius: 50%;
	overflow: hidden;
	max-width: 180px;
	margin-bottom: 15px;
`;
const SocialContainer = styled.ul`
	width: max-content;
	padding: 0;
	list-style-type: none;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 5px;
`;
const SocialItem = styled.li`
	display: grid;
	place-items: center;
	width: 35px;
	height: 35px;
	background-color: #2d3748;
	border-radius: 50%;
	cursor: pointer;
	user-select: none;
`;
const ContactButton = styled.div`
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	padding: 15px;
	background-color: #2d3748;
	margin-top: 15px;
	cursor: pointer;
	user-select: none;
`;
const MainWrapper = styled.div``;
const Navigation = styled.div`
	display: flex;
	align-items: center;
	&::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: #edf2f7;
	}
`;
const NavigationItem = styled.div`
	padding: 0 15px;
	cursor: pointer;
	user-select: none;
`;

export default Home;

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiInstagram } from 'react-icons/fi';
import { css } from '@emotion/react';

import Head from 'next/head';
import Image from 'next/image';

import profile from '../public/profile.jpg';
import ProjectCard from '../components/ProjectCard';

const projectVariant = {
	initial: {
		x: '-100%',
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.5,
			type: 'tween',
		},
	},
	exit: {
		x: '-100%',
		transition: {
			type: 'tween',
		},
	},
};
const blogVariant = {
	initial: {
		x: '100%',
	},
	animate: {
		x: 0,
		transition: {
			staggerChildren: 0.5,
			type: 'tween',
		},
	},
	exit: {
		x: '100%',
		transition: {
			type: 'tween',
		},
	},
};

function Home({ entries }) {
	const [currIsProject, setCurrIsProject] = useState(true);

	return (
		<Wrapper>
			<Head>
				<title>Cendy</title>
			</Head>
			<ProfileWrapper>
				<Heading>Cendy</Heading>
				<ProfileContainer>
					<Profile>
						<Image src={profile} placeholder="blur" alt="Cendy" layout="responsive" />
					</Profile>
					<SocialContainer>
						<SocialItem>
							<a href="https://github.com/CLOEI" target="_blank" rel="noreferrer">
								<FiGithub />
							</a>
						</SocialItem>
						<SocialItem>
							<a
								href="https://www.instagram.com/cendy_ig/"
								target="_blank"
								rel="noreferrer"
							>
								<FiInstagram />
							</a>
						</SocialItem>
					</SocialContainer>
				</ProfileContainer>
				<Text>I&apos;m a MERN stack developer</Text>
				<ContactButton>
					<a href="mailto:cendyemail@gmail.com">
						<Text>Contact me</Text>
					</a>
				</ContactButton>
			</ProfileWrapper>
			<MainWrapper>
				<Navigation as={motion.ul} layout>
					<NavigationItem onClick={() => setCurrIsProject(true)}>
						<Heading weight={700} as="h2">
							Projects
						</Heading>
						{currIsProject && <Underline layoutId="underline" />}
					</NavigationItem>
					<NavigationItem onClick={() => setCurrIsProject(false)}>
						<Heading weight={700} as="h2">
							Blog
						</Heading>
						{!currIsProject && <Underline layoutId="underline" />}
					</NavigationItem>
				</Navigation>
				<div
					css={css`
						overflow-x: hidden;
					`}
				>
					<AnimatePresence exitBeforeEnter initial={false}>
						{currIsProject ? (
							<motion.ul
								key="project"
								initial="initial"
								animate="animate"
								exit="exit"
								variants={projectVariant}
							>
								{entries.map((entry, i) => {
									return <ProjectCard data={entry} key={i} />;
								})}
							</motion.ul>
						) : (
							<motion.ul
								key="blog"
								initial="initial"
								animate="animate"
								exit="exit"
								variants={blogVariant}
							>
								{entries.map((entry, i) => {
									return <ProjectCard data={entry} key={i} />;
								})}
							</motion.ul>
						)}
					</AnimatePresence>
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
	margin: 10px 10px 0 10px;
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 50px;
		margin: 20px 20px 0 20px;
	}
`;
const Heading = styled.h1`
	font-family: 'Inter', sans-serif;
	font-weight: ${(props) => props.weight || 800};
	opacity: 87%;
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
		position: sticky;
		top: 20px;
		align-self: start;
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
	background-color: ${(props) => props.theme['01dp']};
	border-radius: 50%;
	cursor: pointer;
	user-select: none;
	a {
		display: grid;
		place-items: center;
		color: inherit;
		width: 35px;
		height: 35px;
	}
	&:hover {
		background-color: ${(props) => props.theme['02dp']};
	}
`;
const ContactButton = styled.div`
	font-family: 'Inter', sans-serif;
	font-weight: 700;
	padding: 0 15px;
	background-color: ${(props) => props.theme['02dp']};
	margin-top: 15px;
	cursor: pointer;
	user-select: none;
	a {
		color: inherit;
		text-decoration: none;
	}
`;
const MainWrapper = styled.div`
	ul {
		position: relative;
		list-style-type: none;
		padding: 0;
	}
`;
const Navigation = styled.ul`
	display: flex;
	align-items: center;
	list-style-type: none;
	margin: 0;
	&::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: ${(props) => props.theme['02dp']};
	}
`;
const NavigationItem = styled.li`
	position: relative;
	padding: 0 15px;
	cursor: pointer;
	user-select: none;
`;

const Underline = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 2px;
	left: 0;
	background-color: ${(props) => props.theme['03dp']};
`;

export default Home;

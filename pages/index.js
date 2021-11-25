import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import MyProfile from '../public/profile.jpg';
import {
	Flex,
	AspectRatio,
	Box,
	Heading,
	VStack,
	SimpleGrid,
	GridItem,
	Text,
	ButtonGroup,
	IconButton,
	Icon,
} from '@chakra-ui/react';
import { FiGithub } from 'react-icons/fi';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';

function Home({ projects }) {
	console.log(projects);
	return (
		<>
			<Head>
				<title>Cendy/&gt;</title>
			</Head>
			<Flex
				flexDir={{ base: 'column-reverse', md: 'row' }}
				justifyContent="space-around"
				alignItems="center"
				py={12}
				maxW="7xl"
				mx="auto"
			>
				<VStack
					alignItems={['center', 'flex-start']}
					textAlign={['center', 'left']}
				>
					<Heading as="h1" fontWeight="extrabold">
						Self-taught{' '}
						<Text as="span" color="blue.500">
							web developer
						</Text>
					</Heading>
					<Text>And hi! I&apos;m Cendy</Text>
					<ButtonGroup>
						<IconButton
							icon={<FiGithub />}
							rounded="full"
							as="a"
							href="https://github.com/CLOEI"
							target="_blank"
						/>
					</ButtonGroup>
				</VStack>
				<Box w="180px" pos="relative" h="auto" borderRadius="50%" overflow="hidden">
					<AspectRatio ratio={1 / 1} maxW="180px">
						<Image src={MyProfile} layout="fill" alt="Author" placeholder="blur" />
					</AspectRatio>
				</Box>
			</Flex>
			<SkillStack />
			<VStack alignItems="flex-start" my={6} mx={4}>
				<Heading>Projects/&gt;</Heading>
				<VStack alignItems="flex=start">
					{projects.map((item) => {
						return (
							<ProjectCard
								key={item.sys.id}
								image={item.fields.image.fields.file.url}
							/>
						);
					})}
				</VStack>
			</VStack>
		</>
	);
}

function SkillStack() {
	return (
		<SimpleGrid columns={[2, 4]} maxW="5xl" mx="auto">
			<GridItem paddingBottom="100%" bgColor="gray.900" pos="relative">
				<Icon
					as={SiMongodb}
					fill="green.500"
					pos="absolute"
					bottom="5px"
					right="5px"
					w="1.5em"
					h="1.5em"
				/>
			</GridItem>
			<GridItem paddingBottom="100%" bgColor="red.400" pos="relative">
				<Icon
					as={SiExpress}
					fill="red.50"
					pos="absolute"
					bottom="5px"
					right="5px"
					w="1.5em"
					h="1.5em"
				/>
			</GridItem>
			<GridItem paddingBottom="100%" bgColor="blue.400" pos="relative">
				<Icon
					as={SiReact}
					fill="blue.50"
					pos="absolute"
					bottom="5px"
					right="5px"
					w="1.5em"
					h="1.5em"
				/>
			</GridItem>
			<GridItem paddingBottom="100%" bgColor="green.400" pos="relative">
				<Icon
					as={SiNodedotjs}
					fill="#fff"
					pos="absolute"
					bottom="5px"
					right="5px"
					w="1.5em"
					h="1.5em"
				/>
			</GridItem>
		</SimpleGrid>
	);
}

export default Home;

export async function getStaticProps() {
	const API = require('../API');

	const projects = await API.getEntries({
		content_type: 'projects',
		limit: 5,
	});
	return {
		props: {
			projects: projects.items,
		},
	};
}

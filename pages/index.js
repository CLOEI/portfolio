import {
	Box,
	Heading,
	Text,
	HStack,
	VStack,
	IconButton,
	Button,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import styled from '@emotion/styled';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import profile from '../public/assets/profile.jpg';

function Home() {
	return (
		<>
			<Head>
				<title>Cendy/&gt;</title>
			</Head>
			<Box mx={['25px', '50px']} h="100vh">
				<HStack justifyContent="space-between" alignItems="center" py={4}>
					<Heading as="h1" fontSize={['2xl', '2xl', '3xl']}>
						CENDY/&gt;
					</Heading>
					<HStack display={['none', 'none', 'flex']}>
						<Text fontWeight="bold" fontSize={['md', 'lg']} px={2} cursor="pointer">
							Home
						</Text>
						<Text fontWeight="bold" fontSize={['md', 'lg']} px={2} cursor="pointer">
							Projects
						</Text>
						<Text fontWeight="bold" fontSize={['md', 'lg']} px={2} cursor="pointer">
							Blog
						</Text>
					</HStack>
					<IconButton icon={<FiMenu />} display={['flex', 'flex', 'none']} />
				</HStack>
				<VStack
					justifyContent={['center', 'center', 'space-between']}
					pt="71px"
					flexDir={['column', 'column', 'row-reverse']}
				>
					<Box
						overflow="hidden"
						rounded="full"
						w="75%"
						maxW={['250px', '250px', '250px', '360px']}
					>
						<Image
							src={profile}
							alt="author"
							layout="responsive"
							placeholder="blur"
						/>
					</Box>
					<Box>
						<Heading as="h2" fontSize={['3xl', '3xl', '5xl']} whiteSpace="nowrap">
							Hi, I’m Cendy!
						</Heading>
						<Text fontWeight="medium" fontSize={['md', 'lg', 'xl']}>
							I’m a Web Developer
						</Text>
						<Button
							mt="45px"
							colorScheme="brand"
							boxShadow="5px 5px 4px rgba(0, 0, 0, 0.25);"
						>
							Contact me
						</Button>
					</Box>
				</VStack>
			</Box>
		</>
	);
}

export default Home;

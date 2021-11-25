import React from 'react';
import Image from 'next/image';
import { Box, AspectRatio } from '@chakra-ui/react';

function ProjectCard({ title, description, tags, image }) {
	return (
		<Box>
			<Box w="full" pos="relative" h="auto">
				<AspectRatio ratio={16 / 9}>
					<Image src={`https:${image}`} layout="fill" />
				</AspectRatio>
			</Box>
		</Box>
	);
}

export default ProjectCard;

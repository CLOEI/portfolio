import { FiGithub, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

import Image from 'next/image';

import { staggerVariant } from '../utils/variants';
import ProfileImage from '../public/profile.jpeg';

function Profile() {
	return (
		<div className="flex flex-col px-2 lg:pr-0 lg:px-4 my-10 lg:my-0 h-full items-center lg:items-start justify-center space-y-3">
			<div className="relative overflow-hidden">
				<div className="relative w-60 h-60 md:w-48 md:h-48 mb-10 rounded-full overflow-hidden flex-shrink-0">
					<Image
						src={ProfileImage}
						alt="cendy"
						layout="fill"
						placeholder="blur"
						priority
					/>
				</div>
				<motion.div
					variants={rightVariants}
					initial="initial"
					animate="animate"
					className="absolute w-[35%] h-2 bg-blue-green rounded-full right-0 top-5"
				></motion.div>
				<motion.div
					custom={{
						left: 0,
						delay: 0.2,
					}}
					variants={leftVariants}
					initial="initial"
					animate="animate"
					className="absolute w-[35%] h-2 bg-blue-green rounded-full bottom-10"
				></motion.div>
				<motion.div
					custom={{
						left: '1rem',
						delay: 0,
					}}
					variants={leftVariants}
					initial="initial"
					animate="animate"
					className="absolute w-[35%] h-2 bg-blue-green rounded-full bottom-5"
				></motion.div>
			</div>
			<div className="">
				<p className="opacity-60 text-xs">Hello my name</p>
				<h1 className="font-bold text-5xl overflow-hidden">Cendy</h1>
				<p className="max-w-md my-4 opacity-[87%]">
					I&apos;m a self-taught developer. My interest in web development started
					when i decided to build and host a blog using wordpress many years ago —
					and here i am at the present working with{' '}
					<span className="font-mono">JavaScript</span>,{' '}
					<span className="font-mono">HTML</span> and{' '}
					<span className="font-mono">CSS</span> :)
				</p>
				<motion.div
					custom={0.5}
					variants={staggerVariant}
					initial="initial"
					animate="animate"
					className="flex space-x-1 overflow-hidden"
				>
					<motion.button variants={buttonVariant} className="icon-button">
						<a href="https://github.com/CLOEI" target="_blank" rel="noreferrer">
							<FiGithub />
						</a>
					</motion.button>
					<motion.button variants={buttonVariant} className="icon-button">
						<a
							href="https://www.instagram.com/cendy_ig/"
							target="_blank"
							rel="noreferrer"
						>
							<FiInstagram />
						</a>
					</motion.button>
					<motion.button
						variants={buttonVariant}
						className="bg-blue-green text-black px-4 hover:bg-persian-green"
					>
						<a href="mailto:cendyemail@gmail.com">Contact me</a>
					</motion.button>
				</motion.div>
			</div>
		</div>
	);
}

const leftVariants = {
	initial: {
		left: '-100%',
	},
	animate: (custom) => {
		return {
			left: custom.left,
			transition: {
				delay: 0.3 + custom.delay,
				x: { type: 'spring', stiffness: 100 },
				default: { duration: 2 },
			},
		};
	},
};
const rightVariants = {
	initial: {
		right: '-100%',
	},
	animate: {
		right: 0,
		transition: {
			x: { type: 'spring', stiffness: 100 },
			default: { duration: 2 },
		},
	},
};
const buttonVariant = {
	initial: {
		x: '-250%',
	},
	animate: {
		x: 0,
		transition: {
			x: { type: 'spring', stiffness: 60 },
		},
	},
};

export default Profile;

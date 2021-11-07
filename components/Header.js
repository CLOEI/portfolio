import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import style from '../styles/components/header.module.scss';
import author from '../public/images/profile.jpg';

export default function Header(props) {
	const intro = [
		'H',
		'e',
		'l',
		'l',
		'o',
		'!',
		'br',
		'I',
		"'",
		'm',
		'\xa0',
		'C',
		'e',
		'n',
		'd',
		'y',
	];
	const text = useRef();
	const textVariant = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const spanVariant = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			scale: [
				'1, 1',
				'1.25, 0.75',
				'0.75, 1.25',
				'1.15, 0.85',
				'0.95, 1.05',
				'1.05, 0.95',
				'1, 1',
			],
		},
	};

	return (
		<header className={style.container}>
			<div className={style.text}>
				<motion.h1
					ref={text}
					variants={textVariant}
					animate="show"
					initial="hidden"
				>
					{intro.map((val, i) => {
						if (val === 'br') {
							return <br key={i} />;
						} else {
							return (
								<motion.span
									key={i}
									variants={spanVariant}
									whileHover={{
										color: '#ef233c',
										scale: [
											'1, 1',
											'1.25, 0.75',
											'0.75, 1.25',
											'1.15, 0.85',
											'0.95, 1.05',
											'1.05, 0.95',
											'1, 1',
										],
									}}
								>
									{val}
								</motion.span>
							);
						}
					})}
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2 }}
				>
					Always learning~
				</motion.p>
				<motion.button
					className={style.contact}
					role="button"
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 2.5 }}
				>
					Contact me
				</motion.button>
			</div>
			<div className={style.profile}>
				<Image
					src={author}
					alt="author"
					width={460}
					height={460}
					placeholder="blur"
					priority
				/>
			</div>
			<motion.div
				className={style.scroll_left}
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<p>scroll down</p>
				<Image src="/images/arrowd.svg" width={15} height={15} alt="down" />
			</motion.div>
			<motion.div
				className={style.scroll_right}
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<p>scroll down</p>
				<Image src="/images/arrowd.svg" width={15} height={15} alt="down" />
			</motion.div>
		</header>
	);
}

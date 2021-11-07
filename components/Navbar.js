import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import style from '../styles/components/navbar.module.scss';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const menuVariant = {
		hidden: {
			y: '-100vh',
		},
		show: {
			y: 0,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const menuItemVariant = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	};

	function toggleMenu(e) {
		e.currentTarget.classList.toggle(style.burger_active);
		setOpen((state) => !state);
	}

	return (
		<nav className={style.container}>
			<div className={style.burger} onClick={toggleMenu}>
				<div></div>
			</div>
			<motion.ul
				className={style.menu}
				variants={menuVariant}
				initial={false}
				animate={open ? 'show' : 'hidden'}
			>
				<motion.div className={style.profile} variants={menuItemVariant}>
					<Image
						src="/images/profile.jpg"
						alt="author"
						width={460}
						height={460}
						priority
					/>
				</motion.div>
				<motion.li variants={menuItemVariant}>Projects</motion.li>
				<motion.li variants={menuItemVariant}>Blog</motion.li>
				<motion.li variants={menuItemVariant}>Contact</motion.li>
			</motion.ul>
		</nav>
	);
}

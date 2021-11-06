import React from 'react';
import style from '../styles/components/navbar.module.scss';

export default function Navbar() {
	function toggleMenu(e) {
		e.currentTarget.classList.toggle(style.burger_active);
	}

	return (
		<nav className={style.container}>
			<div className={style.burger} onClick={toggleMenu}>
				<div></div>
			</div>
		</nav>
	);
}

import Head from 'next/head';
import Image from 'next/image';
import style from '../styles/home.module.scss';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function Home() {
	return (
		<div className={style.container}>
			<Head>
				<title>Cendy</title>
			</Head>
			<Navbar />
			<header className={style.header}>
				<div className={style.text}>
					<h1>
						Hey,
						<br />
						I&apos;m Cendy
					</h1>
					<p>Always learning~</p>
					<button className={style.contact} role="button">
						Contact me
					</button>
				</div>
				<div className={style.profile}>
					<Image src="/images/profile.jpg" alt="author" width={460} height={460} />
				</div>
			</header>
			<Projects />
		</div>
	);
}

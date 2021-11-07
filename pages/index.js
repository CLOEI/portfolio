import Head from 'next/head';
import style from '../styles/home.module.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function Home({ projects }) {
	return (
		<div className={style.container}>
			<Head>
				<title>Cendy</title>
			</Head>
			<Navbar />
			<Header />
			<Projects items={projects} />
		</div>
	);
}

export async function getStaticProps() {
	const client = require('contentful').createClient({
		space: process.env.SPACE_ID,
		accessToken: process.env.DELIVERY_TOKEN,
	});

	const response = await client.getEntries({
		content_type: 'projects',
		order: 'sys.createdAt',
	});
	return {
		props: {
			projects: response.items,
		},
	};
}

import Projects from '../components/projects';
import Layout from '../components/Layout';

function Home({ projects }) {
	return (
		<Layout>
			<Projects projects={projects} key="projects" />
		</Layout>
	);
}

export default Home;

export async function getStaticProps() {
	const client = require('../contentful');
	const projects = await client.getEntries({
		content_type: 'projects',
	});

	return {
		props: {
			projects: projects.items,
		},
		revalidate: 10,
	};
}

import Card from './Card';

function Index({ projects }) {
	return (
		<div className="space-y-4 mt-6" key="projects">
			{projects.map((project, i) => {
				return <Card key={i} data={project} />;
			})}
		</div>
	);
}

export default Index;

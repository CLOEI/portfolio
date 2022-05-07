import { useState } from 'react';

import Card from './Card';

function Index({ projects }) {
	const [projectMore, setProjectMore] = useState(false);

	return (
		<div className="relative flex flex-col items-center space-y-4 md:px-0">
			<h2 className="relative font-bold text-3xl md:text-5xl opacity-[38%] self-start">
				<span className="html-tag">&lt;h2&gt;</span>
				PROJECTS
				<span className="hidden sm:inline">&lt;/h2&gt;</span>
			</h2>
			{projects.slice(0, projectMore ? undefined : 3).map((project, i) => {
				return <Card key={i} data={project} />;
			})}
			<button
				className="border-2 border-persian-green px-4 py-2 rounded-sm hover:text-persian-green"
				onClick={() => setProjectMore(!projectMore)}
			>
				{projectMore ? 'Show less' : 'Show more'}
			</button>
		</div>
	);
}

export default Index;

import Link from 'next/link';
import { FaStickyNote } from 'react-icons/fa';

import { motion } from 'framer-motion';

function Card({ data }) {
	const date = data.sys.createdAt;
	const title = data.fields.title;
	const slug = data.fields.slug;

	return (
		<Link href={`/blog/${slug}`} passHref scroll={false}>
			<motion.a
				variants={thisVariant}
				className="flex flex-col justify-around h-full bg-persian-green aspect-square p-4 hover:-translate-y-1 transition-all ease-linear"
			>
				<div className="space-y-2">
					<FaStickyNote size={30} />
					<h3>{title}</h3>
				</div>
				<p className="text-xs">
					{new Date(date).toLocaleDateString('id-ID', {
						weekday: 'long',
						year: 'numeric',
						month: 'long',
						day: 'numeric',
					})}
				</p>
			</motion.a>
		</Link>
	);
}

const thisVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export default Card;

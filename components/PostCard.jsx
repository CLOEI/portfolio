import Link from 'next/link';

import { motion } from 'framer-motion';

const cardVariant = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

function PostCard({ data }) {
	const date = data.sys.createdAt;
	const title = data.fields.title;
	const slug = data.fields.slug;

	return (
		<motion.div
			className="relative border-blue-green border-2 rounded-lg p-2"
			variants={cardVariant}
		>
			<Link href={`/blog/${slug}`}>
				<a className="after:absolute after:top-0 after:left-0 after:w-full after:h-full">
					<h3 className="text-high text-lg font-bold">{title}</h3>
				</a>
			</Link>
			<p className="text-medium w-max">
				{new Date(date).toLocaleDateString('id-ID', {
					weekday: 'long',
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				})}
			</p>
		</motion.div>
	);
}

export default PostCard;

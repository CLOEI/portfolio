import Link from 'next/link';
import { FaStickyNote } from 'react-icons/fa';

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
		<Link href={`/blog/${slug}`} passHref>
			<motion.a className="flex flex-col justify-around bg-persian-green aspect-square p-4 hover:-translate-y-1 transition-all ease-linear">
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

export default PostCard;

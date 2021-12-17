import React from 'react';

function PostCard({ data }) {
	const date = data.sys.createdAt;
	const title = data.fields.title;

	return (
		<div>
			<p>{title}</p>
			<p>{date}</p>
		</div>
	);
}

export default PostCard;

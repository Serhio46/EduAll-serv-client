import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import CreatePostCard from '../CreatePostCard';
import PostCard from '../PostCard';

const Feed: FC = () => {
	return (
		<Box sx={{
			width: '600px',
			//backgroundColor: 'primary.dark',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			mr: '38px',
		}}>
			<CreatePostCard />
			<PostCard />
			<PostCard />
		</Box>
	)
}

export default Feed

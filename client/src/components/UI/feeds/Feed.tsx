import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import CreatePostCard from '../createPostCard/CreatePostCard';
import PostCard from '../PostCard';
import { PostFeedActionCreators } from '../../../store/reducers/post/postFeedActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const Feed: FC = () => {

	const { user } = useTypedSelector(({ authReducer }) => authReducer)
	const { posts } = useTypedSelector(({ postFeedReducer }) => postFeedReducer)

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(PostFeedActionCreators.loadPosts(user._id));
	}, [])

	console.log(posts);

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
			{posts.map(post => {
				return <PostCard
					title={post.title}
					author={post.author}
					key={post.title} />
			})}
		</Box>
	)
}

export default Feed

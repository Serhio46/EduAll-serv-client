import axios from 'axios';
import { AppDispatch } from '../..';
import { IPost } from '../../../models/IPost';
import { ActionPostFeedTypes, SetPostsFeedAction } from './types';


export const PostFeedActionCreators = {
	setPosts: (posts: IPost[]): SetPostsFeedAction => ({
		type: ActionPostFeedTypes.SET_POSTS,
		payload: posts,
	}),
	loadPosts: (userId: string) => async (dispatch: AppDispatch) => {
		console.log(userId);
		console.log('start')
		const { data } = await axios.get(`http://localhost:5000/api/posts/myposts/${userId}`);
		dispatch(PostFeedActionCreators.setPosts(data))
	},
	createPost: (obj: IPost) => async (dispatch: AppDispatch) => {
		await axios.post('http://localhost:5000/api/posts', obj);
	}
}
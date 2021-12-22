import { IPost } from '../../../models/IPost';

export interface IPostFeedReducerState {
	posts: IPost[];
};

export enum ActionPostFeedTypes {
	SET_POSTS = 'SET_POSTS',
};

export interface SetPostsFeedAction {
	type: ActionPostFeedTypes.SET_POSTS;
	payload: IPost[];
}

export type PostFeedActions = SetPostsFeedAction;
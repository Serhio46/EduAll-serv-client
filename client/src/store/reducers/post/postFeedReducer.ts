import { IPost } from '../../../models/IPost';
import { IPostFeedReducerState, PostFeedActions, ActionPostFeedTypes } from './types';

const initialState: IPostFeedReducerState = {
	posts: []
}

const postFeedReducer = (state = initialState, action: PostFeedActions): IPostFeedReducerState => {
	switch (action.type) {
		case ActionPostFeedTypes.SET_POSTS:
			return {
				...state,
				posts: action.payload
			};
		default:
			return state;
	}
};

export default postFeedReducer;
import { combineReducers } from "redux";
import authReducer from './auth/authReducer';
import postFeedReducer from './post/postFeedReducer';

const rootReducer = combineReducers({
	authReducer,
	postFeedReducer
})

export default rootReducer;
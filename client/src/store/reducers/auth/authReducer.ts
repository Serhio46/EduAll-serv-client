import { IUser } from '../../../models/IUser'
import { IAuthReducerState, AuthActions, ActionAuthTypes } from './types'

const initialState: IAuthReducerState = {
	isAuth: false,
	user: {} as IUser,
	isLoading: false
}

const authReducer = (state = initialState, action: AuthActions): IAuthReducerState => {
	switch (action.type) {
		case (ActionAuthTypes.SET_USER):
			return {
				...state,
				user: action.payload,
			};
		case (ActionAuthTypes.SET_IS_AUTH):
			return {
				...state,
				isAuth: action.payload,
			};
		case (ActionAuthTypes.SET_IS_LOADING):
			return {
				...state,
				isLoading: action.payload
			};
		default:
			return state;
	}
}

export default authReducer;
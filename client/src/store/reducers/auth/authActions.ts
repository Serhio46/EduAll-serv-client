import axios from 'axios';
import { AppDispatch } from '../..';
import { IUser } from '../../../models/IUser';
import { IUserSignIn } from '../../../models/IUserSignIn';
import { IUserSignUp } from '../../../models/IUserSignUp';
import { SetUserAction, SetIsAuthAction, SetIsLoadingAction, ActionAuthTypes } from './types';


export const AuthActionCreators = {
	setUser: (user: IUser): SetUserAction => ({
		type: ActionAuthTypes.SET_USER,
		payload: user
	}),
	setAuth: (auth: boolean): SetIsAuthAction => ({
		type: ActionAuthTypes.SET_IS_AUTH,
		payload: auth
	}),
	setLoading: (isLoading: boolean): SetIsLoadingAction => ({
		type: ActionAuthTypes.SET_IS_LOADING,
		payload: isLoading,
	}),
	signUp: (user: IUserSignUp) => async (dispatch: AppDispatch) => {

		try {
			dispatch(AuthActionCreators.setLoading(true));
			const result = await axios.post('http://localhost:5000/api/auth/registration', user);
			localStorage.setItem('token', result.data.token);
			dispatch(AuthActionCreators.setUser(result.data.user));
			dispatch(AuthActionCreators.setAuth(true));
			dispatch(AuthActionCreators.setLoading(false));
		} catch (error: any) {
			console.log(error.response.data);
		}
	},

	signIn: (user: IUserSignIn) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setLoading(true));
			const result = await axios.post('http://localhost:5000/api/auth/login', user);
			localStorage.setItem('token', result.data.token);
			dispatch(AuthActionCreators.setUser(result.data.user));
			dispatch(AuthActionCreators.setAuth(true));
			dispatch(AuthActionCreators.setLoading(false));
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	},

	logOut: () => async (dispatch: AppDispatch) => {
		dispatch(AuthActionCreators.setLoading(true));
		try {
			localStorage.removeItem('token');
			dispatch(AuthActionCreators.setUser({} as IUser));
			dispatch(AuthActionCreators.setAuth(false));
			dispatch(AuthActionCreators.setLoading(false));
		} catch (error: any) {
			console.log(error.response.data.message)
		}
	},

	auth: () => async (dispatch: AppDispatch) => {
		try {
			const result = await axios.get('http://localhost:5000/api/auth/auth', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
			localStorage.setItem('token', result.data.token);
			dispatch(AuthActionCreators.setUser(result.data.user));
			dispatch(AuthActionCreators.setAuth(true));
			dispatch(AuthActionCreators.setLoading(false));

		} catch (error: any) {
			console.log(error.response.data.message);
			localStorage.removeItem('token');
		}
	}
}
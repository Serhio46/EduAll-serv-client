import { IUser } from '../../../models/IUser';

export interface IAuthReducerState {
	user: IUser;
	isAuth: boolean;
	isLoading: boolean;
}

export enum ActionAuthTypes {
	SET_IS_AUTH = 'SET_IS_AUTH',
	SET_USER = 'SET_USER',
	SET_IS_LOADING = 'SET_IS_LOADING',
}

export interface SetUserAction {
	type: ActionAuthTypes.SET_USER;
	payload: IUser;
}

export interface SetIsAuthAction {
	type: ActionAuthTypes.SET_IS_AUTH;
	payload: boolean;
}

export interface SetIsLoadingAction {
	type: ActionAuthTypes.SET_IS_LOADING;
	payload: boolean;
}

export type AuthActions =
	SetUserAction |
	SetIsAuthAction |
	SetIsLoadingAction;
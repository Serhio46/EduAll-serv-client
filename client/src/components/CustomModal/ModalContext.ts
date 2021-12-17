import { createContext } from "react";
import { IContent } from './ModalContainer';

export interface IModalContext {
	openModal: ({ }: IContent) => void,
	closeModal: () => void,
}

export const ModalContext = createContext<IModalContext>({
	openModal: () => { },
	closeModal: () => { },
});
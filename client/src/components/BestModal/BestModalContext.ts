import { createContext } from "react";
import { IContent } from './BestModalProvider';

export interface IBestModalContext {
	openModal: ({ }: IContent) => void,
	closeModal: () => void,
}

export const BestModalContext = createContext<IBestModalContext>({
	openModal: () => { },
	closeModal: () => { },
});
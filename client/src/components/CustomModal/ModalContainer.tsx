import { FC, useState } from 'react';
import CustomModalReUse from './CustomModalReUSe';
import { IModalContext, ModalContext } from './ModalContext'


export interface IContent {
	title: string;
	content: any;
};

interface ContainerProps {
	children: React.ReactNode;
}
const ModalContainer: FC<ContainerProps> = ({ children }) => {

	const [modalOpened, setModalOpened] = useState(false);
	const [modalContent, setModalContent] = useState<IContent>({ title: '', content: null });



	const openModal = (modalConfig: IContent): void => {
		setModalContent(modalConfig);
		setModalOpened(true);
	}

	const closeModal = (): void => {
		setModalOpened(false);
	}

	const valueModalProvider: IModalContext = {
		openModal,
		closeModal
	}

	return (
		<ModalContext.Provider value={valueModalProvider}>
			{modalOpened && <CustomModalReUse title={modalContent.title} content={modalContent.content} />}
			{children}
		</ModalContext.Provider>
	)
}

export default ModalContainer;
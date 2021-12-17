import { FC, useState } from 'react';
import { IBestModalContext, BestModalContext } from './BestModalContext';
import BestModal from './BestModal';

export interface IContent {
	content: any;
};

interface BestProps {
	children: React.ReactNode;
}

const BestModalProvider: FC<BestProps> = ({ children }) => {

	const [modalOpenned, setModalOpenned] = useState(false);
	const [modalContent, setModalContent] = useState<IContent>({ content: null });

	const openModal = (modalConfig: IContent): void => {
		setModalContent(modalConfig);
		setModalOpenned(true);
	};

	const closeModal = (): void => {
		setModalOpenned(false);
	}

	const BestModalProviderValue: IBestModalContext = {
		openModal,
		closeModal,
	}

	return (
		<BestModalContext.Provider value={BestModalProviderValue}>
			<BestModal isOpen={modalOpenned} content={modalContent.content} />
			{children}
		</BestModalContext.Provider>
	);
}

export default BestModalProvider;

import { FC, useContext } from 'react';
import { BestModalContext } from './BestModalContext';
import { Modal } from '@material-ui/core';

interface BestModalProps {
	isOpen: boolean;
	content: React.Component
}

const BestModal: FC<BestModalProps> = ({ isOpen, content }) => {

	const { closeModal } = useContext(BestModalContext);

	const handleClose = (): void => {
		closeModal();
	}

	return (
		<Modal
			onClose={handleClose}
			open={isOpen}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				border: '1px solid primary',
			}}
		><>{content}</></Modal>
	);
}

export default BestModal;
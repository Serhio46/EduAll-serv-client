import { FC, useContext, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './CustomModal.module.css'
import { ModalContext } from './ModalContext';

interface ModalProps {
	title: string;
	content: React.Component | null;

}

const CustomModalReUse: FC<ModalProps> = ({ title, content }) => {

	const { closeModal } = useContext(ModalContext);

	const element = useMemo(() => {
		const el = document.createElement('div');
		el.classList.add('portal')
		return el;
	}, []);

	useEffect(() => {
		document.body.appendChild(element);

		return () => {
			document.body.removeChild(element)
		}
	})

	const handleClose = (): void => {
		closeModal();
	}


	return (
		createPortal(<div className={styles.backdrop} onClick={handleClose}>
			<div className={styles.modal} onClick={(e) => { e.stopPropagation() }}>
				<div className={styles.modalTitle}>
					<h3>{title}</h3>
				</div>
				<div className={styles.modalBody}>
					{content}
				</div>
			</div>
		</div>, element)
	);
}

export default CustomModalReUse;
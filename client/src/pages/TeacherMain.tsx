import { FC } from 'react';
import { Container } from '@material-ui/core';
import SideBar from '../components/UI/sidebar/Sidebar';

const TeacherMain: FC = () => {
	return (
		<Container disableGutters
			sx={{
				pl: '0',
				display: 'flex',
				mt: '20px'
			}}
			maxWidth="lg"
		>
			<SideBar />
		</Container>
	);
}

export default TeacherMain;
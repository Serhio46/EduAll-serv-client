import { FC } from 'react';
import { Container } from '@material-ui/core';
import SideBar from '../components/UI/sidebar/Sidebar';
import Feed from '../components/UI/feeds/Feed';
import RightBar from '../components/UI/rightBar/RightBar';

const StudentMain: FC = () => {
	return (
		<Container disableGutters
			sx={{
				pl: '0',
				display: 'flex',
				alignItems: 'start',
				mt: '20px'
			}}
			maxWidth="lg"
		>
			<SideBar />
			<Feed />
			<RightBar />
		</Container>
	);
}

export default StudentMain;
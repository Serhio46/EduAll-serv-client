import { FC } from 'react';
import { Container } from '@material-ui/core';
import SideBar from '../components/UI/sidebar/Sidebar';
import ProfileMain from '../components/UI/profile/ProfileMain';

const MyProfile: FC = () => {
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
			<ProfileMain />
		</Container>
	);
}

export default MyProfile;
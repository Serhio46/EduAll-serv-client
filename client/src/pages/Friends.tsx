import React, { FC } from 'react';
import { Paper, Box, Avatar, Typography, IconButton, Container } from '@material-ui/core';
import FriendsMain from '../components/UI/feeds/friends/FriendsMain';
import SideBar from '../components/UI/sidebar/Sidebar';

const Friends: FC = () => {
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
			<FriendsMain />
		</Container>
	)
}

export default Friends;
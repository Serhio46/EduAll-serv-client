import React, { FC } from 'react';
import { Paper, Box, Avatar, Typography, IconButton, Container, Button, Divider } from '@material-ui/core';
import UserInfoShort from '../../UserInfoShort';

const FriendsItem: FC = () => {
	return (
		<Box sx={{
			mb: '25px'
		}}>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				mb: '25px'
			}}>
				<UserInfoShort />
				<Button variant='outlined'>Send Message</Button>
			</Box>
			<Divider />
		</Box>
	)
}

export default FriendsItem

import React, { FC } from 'react';
import { IconButton, Box } from '@material-ui/core';
import Badge from '@mui/material/Badge';
import { Person, Message, Notifications } from '@mui/icons-material';


const Notification: FC = () => {
	return (
		<Box
			sx={{
				ml: '10px',
				display: 'flex',
				alignItems: 'center',
				marginRight: '80px'
			}}>
			<IconButton
				color='inherit'>
				<Badge badgeContent={4} color='error'>
					<Person />
				</Badge>
			</IconButton>
			<IconButton
				color='inherit'>
				<Badge badgeContent={2} color='error'>
					<Message />
				</Badge>
			</IconButton>
			<IconButton
				color='inherit'>
				<Badge badgeContent={2} color='error'>
					<Notifications />
				</Badge>
			</IconButton>
		</Box>
	)
}

export default Notification;

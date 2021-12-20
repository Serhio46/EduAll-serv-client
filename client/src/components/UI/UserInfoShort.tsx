import React, { FC } from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';
import Badge from '@mui/material/Badge';

const UserInfoShort: FC = () => {
	return (
		<Box sx={{
			m: '10px 10px 0 0',
			display: 'flex',
			alignItems: 'center',
		}}>
			<Badge variant="dot" color='error'
				sx={{ mr: '10px' }}
			>
				<Avatar></Avatar>
			</Badge>
			<Typography
				variant='h6'
				component='span'
			>Nick Name</Typography>
		</Box>
	)
}

export default UserInfoShort

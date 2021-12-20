import React, { FC } from 'react';
import { Box, Divider, Avatar, Typography } from '@material-ui/core';
import Badge from '@mui/material/Badge';

const RightBar: FC = () => {
	return (
		<Box>
			<Typography><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</Typography>
			<Divider />
			<Box>
				<Typography
					sx={{ m: '10px 0' }}
				>Online Friends</Typography>
				<Box sx={{
				}}>
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
				</Box>
			</Box>
		</Box>
	)
}

export default RightBar;

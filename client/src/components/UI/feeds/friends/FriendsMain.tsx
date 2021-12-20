import React, { FC } from 'react';
import { Paper, Box, Divider, Button } from '@material-ui/core';
import FriendsItem from './FriendsItem';

const FriendsMain: FC = () => {
	return (
		<Paper elevation={5} sx={{
			padding: '10px',
			width: '950px',
			mb: '25px',
		}}>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				mb: '20px',
			}}>
				<Box sx={{
					display: 'flex',
				}}>
					<Button>All friends</Button>
					<Button>Online</Button>
				</Box>
				<Button variant='contained'>Find friends</Button>
			</Box>
			<Divider sx={{
				mb: '25px'
			}} />
			<FriendsItem />
			<FriendsItem />
			<FriendsItem />
			<FriendsItem />
		</Paper>
	)
}

export default FriendsMain;

import React, { FC } from 'react';
import { Box, Paper, Divider, Avatar, Typography, Button } from '@material-ui/core';
import Feed from '../feeds/Feed';

const ProfileMain: FC = () => {
	return (
		<Box sx={{
			display: 'flex',
			flexWrap: 'wrap'
		}}>
			<Paper elevation={5} sx={{
				padding: '10px',
				width: '150px',
				height: '250px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				marginRight: '25px',
				mb: '25px'
			}}>
				<img className='profile-ava' src="assets/7.jpeg" alt="Avatar" />
				<Button variant='contained'>Edit</Button>
			</Paper>
			<Paper elevation={5} sx={{
				padding: '10px',
				width: '750px',
				height: '250px',
				display: 'flex',
				flexDirection: 'column',
			}}>
				<Typography>Main Info</Typography>
			</Paper>
			<Paper elevation={5} sx={{
				padding: '10px',
				width: '250px',
				height: '150px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginRight: '25px'
			}}>
				<Typography>Friends</Typography>
			</Paper>
			<Paper elevation={5} sx={{
				padding: '10px',
				width: '650px',
				height: '150px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginRight: '25px',
				mb: '25px'
			}}>
				<Typography>Photo</Typography>
			</Paper>
			<Paper elevation={5} sx={{
				padding: '10px',
				width: '945px',
				height: '150px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginRight: '25px',
				mb: '25px'
			}}>
				<Typography>Courses</Typography>
			</Paper>
			<Feed />
			<Paper elevation={5} sx={{
				padding: '10px',
				width: '300px',
				height: '150px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginRight: '25px',
				mb: '25px'
			}}>
				<Typography>Adv or news dinamic loading</Typography>
			</Paper>
		</Box>
	);
}

export default ProfileMain;

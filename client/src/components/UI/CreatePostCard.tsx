import React, { FC } from 'react';
import { Paper, Box, Divider, Avatar, Typography, IconButton, TextField } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';;

const CreatePostCard: FC = () => {
	return (
		<Paper elevation={5}
			sx={{
				padding: '10px',
				width: '550px',
				height: '150px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center'
				}}
			>
				<Avatar
					sx={{
						mr: '10px',
						height: '50px',
						width: '50px'
					}}
				><PersonIcon />
				</Avatar>
				<TextField
					InputProps={{ disableUnderline: true }}
					placeholder='Whats in your mind?'
					variant="standard"
					sx={{
						color: 'gray'
					}}
				/>
			</Box>
			<Divider variant="middle" />
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-evenly'
				}}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<IconButton>
						<AddAPhotoIcon htmlColor='tomato' />
					</IconButton>
					<Typography
						sx={{
							fontSize: '10px'
						}}
					>Add photo</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<IconButton>
						<TagIcon htmlColor='blue' />
					</IconButton>
					<Typography
						sx={{
							fontSize: '10px'
						}}
					>Tag</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<IconButton>
						<AddLocationAltIcon htmlColor='green' />
					</IconButton>
					<Typography
						sx={{
							fontSize: '10px'
						}}
					>Location</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<IconButton>
						<SentimentSatisfiedAltIcon htmlColor='goldenrod' />
					</IconButton>
					<Typography
						sx={{
							fontSize: '10px'
						}}
					>Feelings</Typography>
				</Box>
			</Box>
		</Paper>
	)
}

export default CreatePostCard;

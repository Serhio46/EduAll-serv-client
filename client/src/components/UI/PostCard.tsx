import { FC } from 'react';
import { Paper, Box, Avatar, Typography, IconButton } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';

const PostCard: FC = () => {
	return (
		<Paper elevation={5}
			sx={{
				marginTop: '25px',
				padding: '10px',
				width: '550px',
				height: '500px',
				display: 'flex',
				flexDirection: 'column',
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
				<Typography
					variant='h6'
					component='span'
				>Siarhei Shapavalau</Typography>
				<Typography
					sx={{
						pl: '15px'
					}}
				>5 min ago</Typography>
			</Box>
			<Typography
				sx={{
					marginTop: '5px',
				}}>
				Make new social app for students!!!</Typography>
			<Box
				sx={{
					marginTop: '25px',
					backgroundColor: 'gray',
					width: '550px',
					height: '350px',
				}}>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					mt: '10px',
				}}>
				<Box>
					<IconButton>
						<RecommendIcon htmlColor='blue' />
					</IconButton>
					<IconButton>
						<FavoriteIcon htmlColor='red' />
					</IconButton>
				</Box>
				<Typography
					sx={{
						textDecoration: 'underline'
					}}
				>9 comments</Typography>
			</Box>
		</Paper>
	)
}

export default PostCard;

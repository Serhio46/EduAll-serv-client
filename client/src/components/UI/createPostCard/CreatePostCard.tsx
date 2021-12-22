import React, { FC, useState } from 'react';
import { IPost } from '../../../models/IPost';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { PostFeedActionCreators } from '../../../store/reducers/post/postFeedActions';
import classes from './createPostCard.module.css';

import { Paper, Box, Divider, Avatar, Typography, TextField, Button } from '@material-ui/core';
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import TagIcon from '@mui/icons-material/Tag';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';




const CreatePostCard: FC = () => {

	const dispatch = useDispatch();
	const { user } = useTypedSelector(({ authReducer }) => authReducer)

	const [post, setPost] = useState<string>('');
	const [file, setFile] = useState<File | null>(null);

	const handleChangePost = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPost(e.target.value);
	}

	const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files !== null) {
			setFile(e.target.files[0])
		}
	}

	const onCreatePost = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newPost: IPost = {
			userId: user._id,
			title: post,
			author: user.userName,
		}
		dispatch(PostFeedActionCreators.createPost(newPost));
		setPost('');
	};

	return (
		<Paper elevation={5}
			sx={{
				padding: '10px',
				width: '580px',
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
					onChange={handleChangePost}
					value={post}
					InputProps={{ disableUnderline: true }}
					placeholder='Whats in your mind?'
					variant="standard"
					sx={{
						color: 'gray'
					}}
				/>
			</Box>
			<Divider variant="middle" />
			<form className={classes.form} onSubmit={onCreatePost}>
				<label className={classes.label} htmlFor='file'>
					<AddAPhotoIcon htmlColor='tomato' />
					<Typography sx={{ fontSize: '10px' }}>Add photo</Typography>
					<input
						style={{ display: 'none' }}
						type='file'
						id='file'
						accept='.png, .jpeg, .jpg'
						onChange={handleChangeFile}
					/>
				</label>
				<Box className={classes.label}>
					<TagIcon htmlColor='blue' />
					<Typography sx={{ fontSize: '10px' }}>Tag</Typography>
				</Box>
				<Box className={classes.label}>
					<AddLocationAltIcon htmlColor='green' />
					<Typography sx={{ fontSize: '10px' }}>Location</Typography>
				</Box>
				<Box className={classes.label}>
					<SentimentSatisfiedAltIcon htmlColor='goldenrod' />
					<Typography sx={{ fontSize: '10px' }}>Feelings</Typography>
				</Box>
				<Button type='submit' variant='outlined'>Share</Button>
			</form>
		</Paper>
	)
}

export default CreatePostCard;

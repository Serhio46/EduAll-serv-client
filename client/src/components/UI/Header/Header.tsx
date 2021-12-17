import React, { FC, useContext } from 'react';
import Search from './Search';
import { AppBar, Toolbar, Typography, IconButton, Box, Container, Button, Avatar } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { AuthActionCreators } from '../../../store/reducers/auth/authActions';
import { useDispatch } from 'react-redux';

import { BestModalContext } from '../../BestModal/BestModalContext';
import SignInForm from '../../BestModal/SignInForm';
import SignUpForm from '../../BestModal/SignUpForm';
import Notification from './Notification';


const Header: FC = () => {

	const dispatch = useDispatch();
	const { isAuth } = useTypedSelector(({ authReducer }) => authReducer);

	const { openModal } = useContext(BestModalContext);

	const handleLogIn = (): void => {
		openModal({ content: <SignInForm /> })
	}

	const handleSignIn = (): void => {
		openModal({ content: <SignUpForm /> })
	}

	const handleLogOut = (): void => {
		dispatch(AuthActionCreators.logOut())
	}

	return (
		<AppBar position='static'>
			<Container maxWidth="lg">
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'space-between'
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center'
						}}
					>
						<Typography
							variant='h6'
							component='span'
						>
							EDUforALL
						</Typography>
						<Search />
					</Box>
					{isAuth ?
						<Box
							sx={{
								ml: '10px',
								display: 'flex',
								alignItems: 'center',
							}}>
							<Notification />
							<IconButton
								onClick={handleLogOut}
								color='inherit'>
								<LogoutIcon />
							</IconButton>
							<Avatar
								sx={{
									color: "inherit",
									bgcolor: 'primary',
									width: 30,
									height: 30,
									marginLeft: '5px'
								}}
								alt='Siarhei Shapavalau' ><PersonIcon /></Avatar>
						</Box> :
						<Box
							sx={{
								ml: '10px'
							}}
						>
							<IconButton
								sx={{ marginRight: '5px' }}
								onClick={handleLogIn}
								color='inherit'
							>
								<LoginIcon />
							</IconButton>
							<Button variant="contained" onClick={handleSignIn}>SignUp</Button>
						</Box>
					}
				</Toolbar>
			</Container>
		</AppBar>
	)
}

export default Header;

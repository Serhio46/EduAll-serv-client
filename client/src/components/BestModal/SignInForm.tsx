import { FC, useContext } from 'react';
import { Box, TextField, Button, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { BestModalContext } from './BestModalContext';
import { AuthActionCreators } from '../../store/reducers/auth/authActions';
import { useDispatch } from 'react-redux';

const SignInForm: FC = () => {
	const { closeModal } = useContext(BestModalContext);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: async (values) => {
			const user = {
				email: values.email,
				password: values.password,
			}
			dispatch(AuthActionCreators.signIn(user));
			closeModal();
			//navigate(user.roles[0]); - нужно получить роль и переадресовать на нужную страницу
		},
	})



	return (
		<form onSubmit={formik.handleSubmit}>
			<Box
				sx={{
					width: 400,
					height: 300,
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<Typography
					sx={{
						mb: '10px'
					}}>SignIn</Typography>
				<TextField
					onChange={formik.handleChange}
					value={formik.values.email}
					id='email'
					name='email'
					placeholder='email'
					sx={{
						width: 300,
						mb: '20px'
					}}
				/>
				<TextField
					onChange={formik.handleChange}
					value={formik.values.password}
					placeholder='password'
					id='password'
					name='password'
					sx={{
						width: 300,
						mb: '20px'
					}} />
				<Button type='submit' variant="outlined">SignIn</Button>
			</Box>
		</form>
	);
}

export default SignInForm;
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Box, TextField, Button, Typography, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import { useFormik } from 'formik';
//import * as yup from 'yup';


import { AuthActionCreators } from '../../store/reducers/auth/authActions';
import { useDispatch } from 'react-redux';


interface ModalProps {
	isOpen: boolean;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomModal: FC<ModalProps> = ({ isOpen, closeModal }) => {


	const handleClose = (): void => {
		closeModal(false);
	}

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: '',
			userName: '',
			password: '',
			confirmPassword: '',
			roles: "student"
		},
		onSubmit: async (values) => {
			const user = {
				email: values.email,
				userName: values.userName,
				password: values.password,
				roles: [values.roles],
			}
			dispatch(AuthActionCreators.signUp(user));
			closeModal(false);
			navigate(user.roles[0]);
		},
	})

	return (
		<Modal
			onClose={handleClose}
			open={isOpen}
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				border: '1px solid primary',
			}}
		>
			<form onSubmit={formik.handleSubmit}>
				<Box
					sx={{
						width: 400,
						height: 500,
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
						value={formik.values.userName}
						id='userName'
						name='userName'
						placeholder='user name'
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
					<TextField
						onChange={formik.handleChange}
						value={formik.values.confirmPassword}
						placeholder='confirm password'
						id='confirmPassword'
						name='confirmPassword'
						sx={{
							width: 300,
							mb: '20px'
						}} />
					<RadioGroup
						onChange={formik.handleChange}
						value={formik.values.roles}
						aria-label="gender"
						defaultValue="student"
						name="roles"
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between'
						}}
					>
						<FormControlLabel value="student" control={<Radio />} label="Student" />
						<FormControlLabel value="teacher" control={<Radio />} label="Teacher" />
					</RadioGroup>
					<Button type='submit' variant="outlined">SignIn</Button>
				</Box>
			</form>

		</Modal>
	);
}

export default CustomModal;



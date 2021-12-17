import { FC } from 'react';
import { useFormik } from 'formik';
import { Modal, Box, TextField, Button, Typography, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

interface RegistartionProps {

}

const RegistrationForm: FC = () => {

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			confirmPassword: ''
		},
		onSubmit: (values) => console.log(values),
	})


	return (
		<form >
			<Box
				sx={{
					width: 400,
					height: 400,
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
					placeholder='password'
					id='password'
					name='password'
					sx={{
						width: 300,
						mb: '20px'
					}} />
				<TextField
					placeholder='confirm password'
					id='confirmPassword'
					name='confirmPassword'
					sx={{
						width: 300,
						mb: '20px'
					}} />
				<RadioGroup
					aria-label="gender"
					defaultValue="student"
					name="radio-buttons-group"
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
	);
}

export default RegistrationForm;
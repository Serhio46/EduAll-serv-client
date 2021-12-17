import React, { FC } from 'react';
import { Container, Box, Typography } from '@material-ui/core';


/* interface MainProps {
	title: string;
	contentText?: string;
} */

const Main: FC = () => {
	return (
		<Container maxWidth="lg">
			<Box sx={{
				height: 300,
				backgroundColor: 'primary.dark',
				mt: '20px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',

			}}>
				<Typography
					variant='h2'
					color='inherit'
					sx={{}}
				>ASDSD</Typography>
				<Typography>asdasdasd</Typography>
			</Box>
		</Container>

	)
}

export default Main;

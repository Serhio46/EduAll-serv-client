import React, { FC } from 'react';
import { Box, Divider, Typography } from '@material-ui/core';
import UserInfoShort from '../UserInfoShort';


const RightBar: FC = () => {
	return (
		<Box>
			<Typography><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</Typography>
			<Divider />
			<Box>
				<Typography
					sx={{ m: '10px 0' }}
				>Online Friends</Typography>
				<UserInfoShort />
			</Box>
		</Box>
	)
}

export default RightBar;

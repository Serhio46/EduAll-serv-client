import { FC } from 'react';
import { TextField } from '@material-ui/core';

const Search: FC = () => {
	return (
		<TextField
			type="search"
			variant="filled"
			sx={{
				marginLeft: '50px',
				width: '600px',
			}}
			color="info"
			placeholder='More than 1000 courses is here...'
		>

		</TextField>
	);
}

export default Search;
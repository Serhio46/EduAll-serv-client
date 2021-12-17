import React, { FC } from 'react';
import SideBarItem from './SideBarItem';
import { Toolbar, List } from '@material-ui/core';
import { RssFeed, Group, Message, Groups, School } from '@mui/icons-material';

const SideBar: FC = () => {
	return (
		<Toolbar disableGutters sx={{
			mr: '38px',
		}}>
			<List sx={{ padding: '0' }} >
				<SideBarItem image={<RssFeed />} title={'News'} />
				<SideBarItem image={<Group />} title={'Friends'} />
				<SideBarItem image={<Message />} title={'Messages'} />
				<SideBarItem image={<Groups />} title={'Groups'} />
				<SideBarItem image={<School />} title={'Courses'} />
			</List>
		</Toolbar>
	)
}

export default SideBar;

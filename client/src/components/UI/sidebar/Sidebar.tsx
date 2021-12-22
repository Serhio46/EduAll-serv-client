import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import SideBarItem from './SideBarItem';
import { Toolbar, List } from '@material-ui/core';
import { RssFeed, Group, Message, Groups, School } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const SideBar: FC = () => {

	const { userName } = useTypedSelector(({ authReducer }) => authReducer.user)

	return (
		<Toolbar disableGutters sx={{
			mr: '38px',
			height: ' 400px',
			///overflowY: 'scroll',
			display: 'flex',
			flexDirection: 'column'
		}}>
			<List sx={{ padding: '0' }} >
				<Link to='/student'><SideBarItem image={<RssFeed />} title={'News'} /></Link>
				<Link to={`/profile/${userName}`}><SideBarItem image={<PersonIcon />} title={'MyProfile'} /></Link>
				<Link to='/friends'><SideBarItem image={<Group />} title={'Friends'} /></Link>
				<SideBarItem image={<Message />} title={'Messages'} />
				<SideBarItem image={<Groups />} title={'Groups'} />
				<SideBarItem image={<School />} title={'Courses'} />
			</List>
		</Toolbar >
	)
}

export default SideBar;

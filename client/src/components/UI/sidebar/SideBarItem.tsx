import React, { FC } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface PropsItem {
	image: any;
	title: string;
}

const SideBarItem = ({ image, title }: PropsItem) => {
	return (
		<ListItem button>
			<ListItemIcon>
				{image}
			</ListItemIcon>
			<ListItemText>
				{title}
			</ListItemText>
		</ListItem>
	)
}

export default SideBarItem;

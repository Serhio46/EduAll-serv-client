export interface IPost {
	userId: string;
	author: string | undefined;
	title: string;
	desc?: string;
	image?: string;
	likes?: string[];
};
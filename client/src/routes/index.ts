import Main from '../pages/Main';
import StudentMain from '../pages/StudentMain';
import TeacherMain from '../pages/TeacherMain';
import Profile from '../pages/MyProfile';
import Friends from '../pages/Friends';

export interface IRoute {
	path: string;
	component: React.ComponentType;

};

export enum RoutesName {
	MAIN = '/',
	STUDENT_MAIN = '/student',
	TEACHER_MAIN = '/teacher',
	PROFILE = '/profile/:username',
	FRIENDS = '/friends',
}

export const publicRoutes: IRoute[] = [
	{ path: RoutesName.MAIN, component: Main }
];

export const studentRoutes: IRoute[] = [
	{ path: RoutesName.STUDENT_MAIN, component: StudentMain },
	{ path: RoutesName.PROFILE, component: Profile },
	{ path: RoutesName.FRIENDS, component: Friends },
];

export const teacherRoutes: IRoute[] = [
	{ path: RoutesName.TEACHER_MAIN, component: TeacherMain }
]
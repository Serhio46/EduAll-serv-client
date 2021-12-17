import Main from '../pages/Main';
import StudentMain from '../pages/StudentMain';
import TeacherMain from '../pages/TeacherMain';

export interface IRoute {
	path: string;
	component: React.ComponentType;

};

export enum RoutesName {
	MAIN = '/',
	STUDENT_MAIN = '/student',
	TEACHER_MAIN = '/teacher'
}

export const publicRoutes: IRoute[] = [
	{ path: RoutesName.MAIN, component: Main }
];

export const studentRoutes: IRoute[] = [
	{ path: RoutesName.STUDENT_MAIN, component: StudentMain }
];

export const teacherRoutes: IRoute[] = [
	{ path: RoutesName.TEACHER_MAIN, component: TeacherMain }
]
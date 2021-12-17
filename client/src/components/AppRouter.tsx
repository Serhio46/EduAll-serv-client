import { FC } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import { useTypedSelector } from '../hooks/useTypedSelector'


import { publicRoutes, studentRoutes, teacherRoutes, RoutesName } from '../routes/index'

const AppRouter: FC = () => {

	const isAuth = useTypedSelector(({ authReducer }) => authReducer.isAuth);
	const { roles } = useTypedSelector(({ authReducer }) => authReducer.user);

	return (
		<>
			{!isAuth &&
				<Routes>
					{publicRoutes.map(route =>
						<Route
							path={route.path}
							element={<route.component />}
							key={route.path}
						/>
					)}
					<Route path='*' element={<Navigate to={RoutesName.MAIN} replace />} />
				</Routes>}

			{(isAuth && roles[0] === 'student') &&
				<Routes>
					{studentRoutes.map(route =>
						<Route
							path={route.path}
							element={<route.component />}
							key={route.path}
						/>
					)}
					<Route path='*' element={<Navigate to={RoutesName.STUDENT_MAIN} replace />} />
				</Routes>}

			{(isAuth && roles[0] === 'teacher') &&
				<Routes>
					{teacherRoutes.map(route =>
						<Route
							path={route.path}
							element={<route.component />}
							key={route.path}
						/>
					)}
					<Route path='*' element={<Navigate to={RoutesName.TEACHER_MAIN} replace />} />
				</Routes>}
		</>

	);
}

export default AppRouter;

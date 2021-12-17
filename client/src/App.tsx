import React, { useEffect } from 'react';
import Header from './components/UI/Header/Header';
import AppRouter from './components/AppRouter';
import BestModalProvider from './components/BestModal/BestModalProvider';
import { useDispatch } from 'react-redux';
import { AuthActionCreators } from './store/reducers/auth/authActions';
import './styles.css';



function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(AuthActionCreators.auth());
	}, [])

	return (
		<div className="app">
			<BestModalProvider>
				<Header />
				<AppRouter />
			</BestModalProvider>
		</div>
	);
}

export default App;

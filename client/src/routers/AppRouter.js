import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { LandingScreen } from '../components/pages/landing/LandingScreen';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			{/* <h1>Welcome to React Router!</h1> */}
			<Routes>
				<Route path="/home/*" element={<HomeRouter />} />
				<Route path="/" element={<LandingScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

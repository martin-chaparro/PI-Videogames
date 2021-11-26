import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Landing } from '../components/pages/landing/Landing';
import { HomeRouter } from './HomeRouter';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home/*" element={<HomeRouter />} />
			</Routes>
		</BrowserRouter>
	);
};

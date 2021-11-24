import { Routes, Route } from 'react-router-dom';
import { HomeScreen } from '../components/pages/home/HomeScreen';

export const HomeRouter = () => {
	return (
		<div>
			<h1>Home Nav</h1>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
			</Routes>
		</div>
	);
};
